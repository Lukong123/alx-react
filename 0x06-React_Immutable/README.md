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
