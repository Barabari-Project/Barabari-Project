rm -rf build .svelte*

node ./scripts/meta.js;
vite build;

CNAME="barabariproject.org";

# create .nojekyll
touch ./build/.nojekyll;
touch ./build/CNAME;

# add CNAME
echo $CNAME >> ./build/CNAME;