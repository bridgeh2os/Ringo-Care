/*
Storage abstraction layer.

Handles saving and loading
Ringo Care data locally.

Future migration:
localStorage → IndexedDB
*/


export function save(key, value) {

    localStorage.setItem(
        key,
        JSON.stringify(value)
    );

}



export function load(key) {

    const data =
        localStorage.getItem(key);


    return data
        ? JSON.parse(data)
        : null;

}
