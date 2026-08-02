/*
Future abstraction layer.

Instead of scattering localStorage
calls throughout the app, future
features can use this module.

Example:

storage.save("medications", data)

Later this can migrate to IndexedDB.
*/


export function save(key,value){

localStorage.setItem(
key,
JSON.stringify(value)
);

}


export function load(key){

const data =
localStorage.getItem(key);

return data
? JSON.parse(data)
: null;

}
