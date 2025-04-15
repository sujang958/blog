---
title: "The Symbol Type"
description: The only type guaranteed to be unique
category: JavaScript
date: 1682343587516
image: "/images/symbol.png"
---

# Symbol

The Symbol type is a new primitive type in JavaScript that was introduced in ECMAScript 2015 (ES6). It was added as a way to create unique identifiers that cannot be duplicated. The Symbol type is often used as keys within objects, as they are guaranteed to be unique.

To create a symbol, you can use the `Symbol()` function. The `Symbol()` function takes an optional string argument, which can be used to describe the symbol for debugging purposes.

Since symbols are guaranteed to be unique, even if we create a lot of symbols with the same description, Each symbol is unique from the others. So the description doesn’t affect anything.

```js
const idSymbol1 = Symbol("id")
const idSymbol2 = Symbol("id")

console.log(idSymbol1 == idSymbol2) // false
```

Symbols can also be used as properties on objects. Here's an example of using a symbol as a property on an object:

```js
const mySymbol = Symbol("my description")
const obj = {
  [mySymbol]: "value",
}

console.log(obj[mySymbol]) // 'value'
```

## Not enumerable

One important thing to note is that symbols are not enumerable, which means they will not be included in for...in loops and `Object.keys()`. However, you can use the `Object.getOwnPropertySymbols()` method to get an array of all symbols on an object.

```js
const mySymbol = Symbol("my description")
const obj = {
  [mySymbol]: "value",
}

const symbols = Object.getOwnPropertySymbols(obj)
console.log(symbols[0]) // Symbol(my description)
```

Overall, the Symbol type is a powerful addition to JavaScript that allows developers to create unique identifiers that cannot be duplicated.

## Global Symbols

Sometimes, you may want to create a symbol accessible across files. To create that symbol, you can use `Symbol.for()` function. Unlike the `Symbol()` function, it takes an argument named `key` , which affects the uniqueness of the symbol. if the keys are the same in a global symbol, the symbol is also the same.

```js
const id = Symbol.for("id")
const idToo = Symbol.for("id")

console.log(id === idToo) // true
```

## References

[https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol)
