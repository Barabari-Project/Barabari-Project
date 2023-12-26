import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { imagetools } from 'vite-imagetools';
import {
	writeFile, readFileSync, readdirSync,
	statSync, existsSync, mkdirSync
} from 'fs';
import { dirname } from 'path';
import sharp from "sharp";


// =======================
// IMAGE SET GENERATOR
// =======================
const sizes = [
	[ 'sm', 320 ],
	[ 'md', 640 ],
	[ 'lg', 1280 ],
	[ 'xl', 1920 ]
];

// recursive ensure dir
function ensureExists ( path ) {
	if ( !existsSync( path ) ) {
		ensureExists( dirname( path ) );
		mkdirSync( path );
	}
};


const isDir = ( path ) => statSync( path ).isDirectory();
const read = './static/images';
const write = './static/imgset';

const dirs = readdirSync( read ) // ignore dotfiles
	.filter( e => e.charAt( 0 ) !== '.' )
	.filter( e => isDir( `${ read }/${ e }` ) );
const allowed = [ 'jpg', 'jpeg', 'png', 'webp' ];

console.log( "Making image sets for", dirs );

for ( let im = 0;im < dirs.length;im++ ) {
	const dirName = dirs[ im ];
	const images = readdirSync( read + "/" + dirName );
	// 	// this loop is INSIDE each dir

	for ( let im = 0;im < images.length;im++ ) {
		let [ name, ext ] = images[ im ].split( '.' );
		if ( !allowed.includes( ext ) ) continue;

		const wDir = write + "/" + dirName;
		ensureExists( wDir );
		try {
			const processed = readdirSync( wDir );
			if ( processed.includes( `${ name }-sm.${ ext }` ) ) continue;
		} catch ( e ) { }

		const image = sharp( `${ read }/${ dirName }/${ images[ im ] }` );
		const metadata = await image.metadata();

		console.log( `processing ${ images[ im ] } till ${ metadata.width }px` );

		let i = 0;
		while (
			sizes[ i ] &&
			metadata.width >= sizes[ i ][ 1 ]
		) {
			const [ size, width ] = sizes[ i ];
			const filename = `${ wDir }/${ name }-${ size }.${ ext }`;
			await image.resize( width ).toFile( filename )
			i++;
		};
	}
}

// =================
// ATOMICSS UPDATER
// =================
const file = "static/css/atomic.css";
fetch( "https://manav.ch/atomic.css" )
	.then( r => r.text() )
	.then( t => {
		const read = readFileSync( file, "utf-8" );
		if ( read === t ) return 0;
		writeFile( file, t, ( err ) => {
			if ( err ) throw err;
			console.log( "Updated AtomiCSS" );
		} );
	} );


// =================
// MAIN
// =================
const config = defineConfig( {
	build: {
		target: "es2015"
	},
	plugins: [
		sveltekit(),
		imagetools( { force: true } )
	],
	server: {
		port: 3000,
		fs: {
			allow: [ "." ]
		}
	}
} );
export default config;
