import { Parser } from 'htmlparser2';

const dProps = [ 'og:description', 'twitter:description', 'description' ];
const iProps = [ 'og:image', 'twitter:image', 'image' ];
const tProps = [ 'og:title', 'twitter:title', 'title' ];

const rand = ( max, min = 0 ) => Math.floor( Math.random() * ( max - min + 1 ) ) + min;
const userAgents = [
  'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
  'Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)',
  'Mozilla/5.0 (compatible; Yahoo! Slurp; http://help.yahoo.com/help/us/ysearch/slurp)',
  'DuckDuckBot/1.0; (+http://duckduckgo.com/duckduckbot.html)',
  'Mozilla/5.0 (compatible; Baiduspider/2.0; +http://www.baidu.com/search/spider.html)',
  'Mozilla/5.0 (compatible; YandexBot/3.0; +http://yandex.com/bots)',
  'Sogou Pic Spider/3.0(+http://www.sogou.com/docs/help/webmasters.htm#07)',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
];

const youtubeMetadata = async ( ytID ) => {
  // "https://youtube.com/oembed?url=https://youtu.be/XykX0la4Rn4&format=json"
  const url = `https://youtube.com/oembed?url=https://youtu.be/${ ytID }&format=json`;
  let res;
  try {
    res = await fetch( url ).then( r => r.json() );
  } catch ( err ) {
    return null;
  }

  return {
    url: `https://youtu.be/${ ytID }`,
    title: res.author_name,
    desc: res.title,
    icon: res.thumbnail_url
  };
};

export const generalMetadata = async ( url ) => {
  // if youtube, use youtubeMetadata
  if ( isYT( url ) ) {
    const meta = await youtubeMetadata( cleanYT( url ) );
    if ( meta ) return meta;
  };// if meta is not found continue as is

  let data = { title: [], desc: [], image: [], url };

  const h = await fetch( url, {
    headers: {
      'User-Agent': userAgents[ rand( userAgents.length - 1 ) ]
    },
    redirect: 'follow'
  } ).then( r => r.text() );
  const parser = new Parser( {
    onopentag ( name, attributes ) {
      if ( name === 'meta' ) {
        const { property: p, content: c } = attributes;

        if ( tProps.includes( p ) ) data.title.push( c );
        if ( dProps.includes( p ) ) data.desc.push( c );
        if ( iProps.includes( p ) ) data.image.push( c );
      };

      // exit if 1 of each is found
      if (
        data.title.length &&
        data.desc.length &&
        data.image.length
      ) parser.end();
    }
  }, { decodeEntities: true } );

  parser.write( h );
  parser.end();

  data = {
    title: data.title[ 0 ] || '',
    desc: data.desc[ 0 ] || '',
    image: data.image[ 0 ] || '',
    url
  };

  // title is most important
  if ( !data.title ) return null;
  return data;
};

const isYT = ( url ) => {
  const isIt = false;
  const host = new URL( url ).hostname;
  if ( host.includes( 'youtube' ) ) isIt = true;
  if ( host.includes( 'youtu.be' ) ) isIt = true;
  if ( host.includes( 'youtube-nocookie' ) ) isIt = true;

  return isIt;
}

const cleanYT = ( url, getId = true ) => {
  let id = null;
  let pListId = null;

  url = new URL( url );
  const host = url.hostname;

  // Get video ID
  if ( host === 'youtu.be' ) {
    id = url.pathname.slice( 1 );
  } else if ( host.includes( 'youtube.com' ) ) {
    id = url.searchParams.get( 'v' );
  } else if ( host.includes( 'youtube-nocookie.com' ) ) {
    id = url.pathname.split( "/" )[ 2 ];
  };

  // if no video ID, check for playlist ID
  if ( !id ) {
    const pList = url.searchParams.get( 'list' );
    if ( pList ) pListId = pList;
  };

  if ( !id && !pListId ) throw new Error( 'No video ID or playlist ID found' );

  return getId ? id : pListId;
};

export default generalMetadata;