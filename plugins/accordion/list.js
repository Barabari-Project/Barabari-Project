import { accepted, warnings, blocked } from './utils.js';

const warn = ( msg, reason ) =>
  console.log( `\x1b[33m${ reason }:\x1b[37m ${ msg }` )
const alert = ( msg, reason ) =>
  console.log( `\x1b[31m${ reason }:\x1b[37m ${ msg }` )

function checkWarnings ( url ) {
  const checkUrl = url.hostname.replace( 'www.', '' );

  // structural filters
  if ( blocked.has( checkUrl ) )
    return alert( url.href, blocked.get( checkUrl ) );
  if ( url.href.includes( "#:~:text=" ) )
    return alert( url.href, "Too Specific Text Anchor" );
  if ( warnings.has( checkUrl ) )
    return warn( url.href, warnings.get( checkUrl ) );
  if ( !accepted.includes( checkUrl ) )
    return warn( url.href, "Not in Accepted List" );

  return false;
}


function metaLink ( node, metaMap ) {
  const url = new URL( node.children[ 0 ].url );
  checkWarnings( url )

  node.children[ 0 ] = {
    type: 'html',
    value: /*html*/`<a href="${ url.href }" process="${ metaMap.key }">${ url.href }</a>`
  };
}

function list ( node, parent, metaMap ) {
  node.children.forEach( async ( item ) => {
    if ( item.children && item.children.length > 0 && item.children[ 0 ].type === 'paragraph' ) {
      let p = item.children[ 0 ]
      if ( !p || p.children.length < 1 ) return;
      if ( p.children[ 0 ].type === 'link' ) {
        metaLink( p, metaMap );
      }
    }
  } )
}

export default list;