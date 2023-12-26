import { writeFileSync } from 'fs';
import heading from "./heading.js";
import listing from "./list.js";
import { visit } from 'unist-util-visit';

class Mapper {
  array = [];
  key = null;
  constructor ( name ) {
    this.key = name;
    if ( !this.key )
      throw new Error( "Mapper requires a name" );
  }
  add ( value ) {
    if ( !this.array.includes( value ) )
      this.array.push( value );
  }
  list () {
    return this.array;
  }
  listJSON () {
    return JSON.stringify( this.array );
  }
}

function wrapper () {
  let metaMap = null;

  return transform;
  function transform ( tree, file ) {
    const name = file.filename.split( "/" ).at( -2 );
    metaMap = new Mapper( name );

    visit( tree, 'heading', head );
    visit( tree, 'list', list )

    const metaJSON = metaMap.listJSON();
    writeFileSync(
      `./plugins/data/meta-${ metaMap.key }.json`,
      metaJSON
    );
  };

  function list ( node, _, parent ) {
    if ( node.children.length > 0 )
      listing( node, parent, metaMap );
  };


  function head ( node, _, parent ) {
    const d = node.depth;
    const l = node.children.length;
    if ( d === 3 && l > 0 )
      heading( node, parent );
  };
}; export default wrapper;
