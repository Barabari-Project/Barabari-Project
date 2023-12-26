import { writeFileSync, readdirSync, readFileSync } from 'fs';

export const read = ( path ) => readFileSync( path, 'utf8' );
export const rJSON = ( path ) => JSON.parse( read( path ) );
export const write = ( path, data ) => writeFileSync( path,
  typeof data === 'string' ? data : JSON.stringify( data )
);
export const rDir = ( dir ) => readdirSync( dir );

export class Cacher {
  used = 0;
  cache = null
  constructor () {
    this.used = 0;
    this.cache = new Map();
  }
  get ( key ) {
    this.used++;
    return this.cache.get( key );
  }
  set ( key, value ) {
    this.cache.set( key, value );
  }
  has ( key ) {
    return this.cache.has( key );
  }
}

export const getProgress = ( now, total ) => {
  now = total - now;
  const percent = ( now / total ) * 100;
  const progress = Math.round( percent / 5 );
  const empty = 20 - progress;
  const filled = '▓'.repeat( progress );
  const emptyChar = '░';
  const bar = filled + emptyChar.repeat( empty );
  console.log(
    `${ bar } ${ percent.toFixed( 2 ) }%`
  );
};