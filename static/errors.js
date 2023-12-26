let retries = 0;
let errors = [];
let errorTimer = null;

const flush = () => {
  errorTimer = null;

  fetch( "https://bbs.barabariproject.org/e1/err", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify( errors )
  } )
    .then( res => {
      if ( res.ok ) {
        console.log( "Sent", errors );
        errors = [];
      } else {
        if ( retries < 3 ) {
          retries++;
          errorTimer = setTimeout( flush, 5000 );
          console.log( "Server save errors: attempt ", retries );
        } else {
          console.log( "Server save errors: failed" );
        }
      }
    } )
    .catch( err => {
      console.warn( "Cloudflare rekt" )
      console.alert( err );
    } );
}

/**
 * @param {string} event
 * @param {string} source
 * @param {number} lineno
 * @param {number} colno
 * @param {Error} error
 * @returns {boolean}
 */
window.onerror = function ( evt, src, ln, col, error ) {
  let url = null;
  try {
    url = new URL( src );
  } catch ( e ) {
    try {
      url = new URL( location.origin + src );
    } catch ( e ) {
      url = new URL( window.location.href );
    }
  }
  const obj = {
    src: url.href,
    type: evt,
    loc: [ ln, col ],
    name: error.name,
    msg: error.message,
    stack: error.stack
  };

  errors.push( obj );
  // deal with it, if timer, ok, else set timer to push to server
  if ( !errorTimer ) {
    errorTimer = setTimeout( flush, 5000 );
  }

  return true;
};

if ( location.hostname === "localhost" ) {
  [ Object, String ].forEach( type => {
    type.prototype.d = function () {
      console.log( "🟢 ", this );
      return this;
    };
  } );
}