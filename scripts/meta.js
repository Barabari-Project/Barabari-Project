// meta data generator
// read all files, fetch metata, write back to correct file
import { join } from 'path';
import PQueue from 'p-queue';
import urlMetadata from "url-metadata";
import {
  Cacher, getProgress,
  rJSON, write, rDir
} from './lib/index.js';
import { HTMX, linkTemplate } from './lib/template.js';
import { generalMetadata } from './lib/getmeta.js';

const options = {
  cache: 'force-cache',
  descriptionLength: 280,
  ensureSecureImageRequest: true,
  includeResponseBody: false
};

const cache = new Cacher();
const queue = new PQueue( { concurrency: 6 } );
const errors = [];

const render = ( data ) => HTMX( data, linkTemplate );

const getter = async ( uri ) => {
  if ( cache.has( uri ) )
    return cache.get( uri );
  try {
    const meta = await urlMetadata( uri, options );
    if ( meta ) {
      cache.set( uri, meta );
    } else return null;
    return meta;
  } catch ( err ) { return null; }
};

const getMeta = async ( uri ) => {
  const url = new URL( uri );
  let meta = {
    url: uri,
    // remove last ext & www
    title: url.hostname.replace( 'www.', '' )
      .split( '.' ).slice( 0, -1 ).join( '.' ),
    desc: url.pathname.replaceAll( "-", " " )
      .replaceAll( "/", " " )
      .replaceAll( "_", " " ),
    icon: url.origin + '/favicon.ico'
  }

  let metadata = null;
  metadata =
    await getter( uri ) ||
    await generalMetadata( uri ) ||
    await getter( url.origin )

  if ( metadata.title ) meta.title = metadata.title;
  if ( metadata.description ) {
    const desc = metadata.description;
    meta.desc = desc.slice( 0, 280 ) + ( desc.length > 280 ? '...' : '' );
  };
  if ( metadata.image ) meta.icon = metadata.image;

  return meta;
};

const getAllFiles = async ( dir ) => {
  const files = rDir( dir ).filter( f => f.includes( 'meta' ) );
  let jsons = {};
  for ( let i = 0;i < files.length;i++ ) {
    let file = files[ i ];
    const key = file.split( '.' )[ 0 ].replace( 'meta-', '' );

    file = rJSON( join( dir, file ) );
    jsons[ key ] = file;
  }
  return jsons;
}

const json = await getAllFiles( './plugins/data' );
const files = Object.keys( json );
const len = files.length;

for ( let i = 0;i < len;i++ ) {
  console.log( "Running for file:", files[ i ] );

  const file = files[ i ];
  const writeSrc = `./static/data/${ file }.json`;
  const data = json[ file ]; // URL[]

  let meta = {};
  let alreadyDone = [];
  try {
    const ready = rJSON( writeSrc );
    alreadyDone = Object.keys( ready );
    meta = ready;
  } catch ( err ) { }

  queue.addAll(
    // convert this to, L to use iterator
    data
      .filter( ( uri ) => !alreadyDone.includes( uri ) )
      .map( ( uri ) =>
        async () => meta[ uri ] = render( await getMeta( uri ) )
      )
  );

  const timer = setInterval( () => {
    getProgress( queue.size, data.length );
  }, 2000 );

  await queue.onIdle();
  clearInterval( timer );

  write( writeSrc, meta );
};

console.log( `Experienced ${ errors.length } errors` );
console.log( `Cache used ${ cache.used } times` );
write( `./plugins/data/errors.json`, errors );
process.exit( 0 );