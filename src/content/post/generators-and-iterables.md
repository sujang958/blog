---
title: Generators and Iterables
description: Important concepts in JavaScript
category: JavaScript
date: 1685000628159
image: "/images/generators.png"
---

Generators and Iterable are two important concepts in JavaScript, which are used to handle data structures in a more efficient way.

## Iterables

An Iterable is an object that can be iterated over using the `for...of` loop. An iterable object must have a method named `Symbol.iterator` that returns an iterator object. For example, the `Array` object is iterable because it has the `Symbol.iterator` method, which returns an iterator object that can be used to loop over the array.

```js
const arr = [1, 2, 3, 4]
const iterator = arr[Symbol.iterator]()
for (const element of iterator) {
  console.log(element)
}
// Output: 1 2 3 4
```

## Generators

Generators are functions that can be paused and resumed during their execution. They are defined using the `function*` syntax and use the `yield` keyword to pause their execution and return a value. When a generator is called, it returns an iterator object that can be used to control its execution.

```js
function* generator() {
  yield 1
  yield 2
  return 3
}

const gen = generator()

console.log(gen.next()) // { value: 1, done: false }
console.log(gen.next()) // { value: 2, done: false }
console.log(gen.next()) // { value: 3, done: true }
```

Generators can also receive values from outside using the `next()` method. The value passed to `next()` becomes the value returned by the `yield` keyword.

```js
function* generator() {
  const x = yield "input x"
  const y = yield x + 2
  yield y + 3
}

const iterator = generator()
console.log(iterator.next().value) // input x
console.log(iterator.next(4).value) // 6 (4 + 2) 4 goes to x and yield x + 2
console.log(iterator.next(5).value) // 8 (5 + 3)
```

## Generators are iterable

Generators are iterable. So they can be used in `for...of` loop.

```js
function* generator() {
  yield 1
  yield 2
  return 3
}

const gen = generator()

for (const value of gen) {
  console.log(value)
}
```

```js
// Output
1
2
```

Note: the `for...of` loop ignores the last `value` when `done: true`.

Since generators are iterable, you can also use the spread syntax.

```js
function* generator() {
  yield 1
  yield 2
  return 3
}

const gen = generator()
const arr = [0, ...gen]

console.log(arr) // [0, 1, 2]
```

And it's also useful when you create your own `Symbol.iterator` method.

```js
const iterableObject = {
  length: 5,

  *[Symbol.iterator]() {
    for (let i = 0; i < this.length; i++) {
      yield i
    }
  },
}

console.log([...iterableObject]) // [0, 1, 2, 3, 4]
```

## Generator.return(value)

This method finishes the generator’s execution and return the given `value`.

```js
function* generator() {
  yield 1
  yield 2
  return 3
}

const gen = generator()

console.log(gen.next()) // { value: 1, done: false }
console.log(gen.return(-1)) // { value: -1, done: true }
console.log(gen.next()) // { value: undefined, done: true }
```

## Generator.throw(error)

This method passes an error to a `yield` keyword.

```js
function* generator() {
  yield 1
  console.log("Not reachable log")
  yield 2
  return 3
}

const gen = generator()

console.log(gen.next()) // { value: 1, done: false }
console.log(gen.throw("TL")) // Uncaught TL
console.log(gen.next()) // ignored
```

Generators are useful when dealing with large or infinite data structures, as they allow lazy evaluation of the data. They can also be used to implement custom iteration protocols and control the flow of asynchronous code.

## Conclusion

Generators and Iterable are two powerful features of JavaScript that can be used to handle data structures in a more efficient and flexible way. They are widely used in modern JavaScript frameworks and libraries and are an essential part of any developer's toolkit.
