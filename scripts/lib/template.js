Object.byString = function ( o, s ) {
  s = s
    .replace( /\[(\w+)\]/g, '.$1' )
    .replace( /^\./, '' );
  var a = s.split( '.' );
  for ( var i = 0, n = a.length;i < n;++i ) {
    var k = a[ i ];
    if ( k in o ) {
      o = o[ k ];
    } else return;
  }
  return o;
};

export const linkTemplate = /*html*/`
  <a href='&url;' class='link d-b f rx10 m5' target='_blank'>
    <img src='&icon;' class='icon'/>
    <div class='body p10'>
      <h3 class='title'>&title;</h3>
      <p class='desc'>&desc;</p>
    </div>
  </a>`.replaceAll( /\n/g, "" )
  .replaceAll( /\s{2,}/g, "" )
  .trim();

export const HTMX = ( vars, template ) => {
  let replace = Object.keys( vars );
  replace = replace
    .map( e => {
      if ( typeof e === "string" ) return e;
      if ( typeof e === "object" )
        return Object.keys( vars[ e ] )

      throw new Error( "Invalid type" );
    } )
    .flat( 1 );

  replace = [ ...new Set( replace ) ];

  let html = template;
  for ( let i = 0;i < replace.length;i++ ) {
    const key = `&${ replace[ i ] };`;
    const value = Object.byString( vars, replace[ i ] )
      .replaceAll( "'", "&apos;" )
      .replaceAll( '"', "&quot;" )
      .replaceAll( "<", "&lt;" )
      .replaceAll( ">", "&gt;" )
      .replaceAll( "&", "&amp;" )
      .trim();

    html = html.replaceAll( key, value );
  };

  return html;
};