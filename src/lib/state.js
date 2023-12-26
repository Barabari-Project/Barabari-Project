import { writable } from 'svelte/store';

export const isDemo = writable( false );
export const checkDemo = () => {
  const url = new URL( window.location.href );
  isDemo.set(
    url.searchParams.get( "demo" ) === "true" ||
    url.hostname === "localhost"
  );
};