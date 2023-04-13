## React immutable
### Resources

- [Immutable Object concept](https://en.wikipedia.org/wiki/Immutable_object)
- [Immutable.js Documentation](https://immutable-js.com/docs/v4.3.0)
- [Immutable.js GitHub](https://github.com/immutable-js/immutable-js)

### Learning Objectives

- Immutable objects. Who, what, when, where, and why?
- How to use the Immutable.js library to bring immutability to Javascript
- The differences between List and Map
- How to use Merge, Concat, and Deep Merging
- What a lazy Seq is

## TASKS
### 0. Converting into an immutable object fromJs
Copy the necessary config files specified in the description to the root directory of the project and execute npm install.

In a file named 0-fromjs.js, create a function getImmutableObject that accepts object as a parameter and converts it into an immutable Map using fromJS of the Immutable.js library

Example:

{
     fear: true,
     smell: -1033575916.9145899,
     wall: false,
     thing: -914767132
}
Should return:

Map {
     size: 4,
     _root: ArrayMapNode {
     ownerID: OwnerID {},
     entries: [ [Array], [Array], [Array], [Array] ]
     },
     __ownerID: undefined,
     __hash: undefined,
     __altered: false
}

### 1. Converting into immutable using map
In 1-map.js, modify the function getImmutableObject using Map from Immutable.js

Example:

{
     fear: true,
     smell: -1033575916.9145899,
     wall: false,
     thing: -914767132
}
Should return:

Map {
     size: 4,
     _root: ArrayMapNode {
     ownerID: OwnerID {},
     entries: [ [Array], [Array], [Array], [Array] ]
     },
     __ownerID: undefined,
     __hash: undefined,
     __altered: false
}

### 2. Accessing Nested Elements
Given the function below, edit it to return the value of the object at the defined path

export default function accessImmutableObject(object, array) {
}
The first argument is a plain object
The second one is an array containing a list of a path to some key in the object
The function should return the value of the object at the defined path

Example:

accessImmutableObject({
     name: {
          first: "Guillaume"
          last: "Salva"
     }
}, ['name', 'first'])
Should return Guillaume

Requirements:

The function should either return undefined, a string, or a Map

### 3. List and push
In file 3-list.js, create these 2 functions:

export function getListObject(array) {
}
export function addElementToList(list, element) {
}
getListObject accepts an array as parameter and converts it into an immutable List using the Immutable.js library
addElementToList accepts two arguments: first one is a List and second one is a string
append the string to the list and return the list
