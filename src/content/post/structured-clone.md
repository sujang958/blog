---
title: "structuredClone()"
description: A native way to do a deep copy
category: JavaScript
date: 1681908270291
image: "/images/structured_clone.png"
---

# structuredClone

The `structuredClone()` is the method which allows us to create a deep clone.

## Deep Copy

A deep copy of an object is a copy whose properties do not share the same references.

## The Problem

If you just assign an object to another value, the value will points the same object.

In this code, we assigned `obj1` to `obj2` and changed `obj2`'s `a` property to `2`, but `obj1`'s property was also changed to `2`, which can have unwanted and unexpected consequences.

```tsx
const obj1 = {
  a: 1,
}
const obj2 = obj1

obj2.a = 2

console.log(obj1.a) // Output: 2
```

## Why don’t you use…

### `Object.assign(obj2, obj1)`

This method **only works if there are no nested objects**. If there are nested objects, they are not copied, but point to the original value. This is the same as `{ ...obj1 }`, `Object.create()`.

```tsx
const obj1 = {
  nestedObject: [1],
}
const obj2 = {}

Object.assign(obj2, obj1)

obj2.nestedObject.push(2)

console.log(obj1.nestedObject.at(1)) // Output: 2
```

## `JSON.parse(JSON.stringify())`

Yes, this method works even if you have nested objects. However, `JSON.stringify` can only handle primitive types like `number` and `string`. So if you have values that are not compatible with `JSON.stringify`, this method will not work.

```jsx
const obj1 = {
  bigint: 2n,
}

const obj2 = JSON.parse(JSON.stringify(obj1))
```

```tsx
Uncaught TypeError: ***BigInt value can't be serialized in JSON***
```

## ✊  `structuredClone()`

This method works even if you have nested objects and non-basic types such as `BigInt`, `Set`.

```tsx
const obj1 = {
  nested: [1],
  bigint: 3n,
}

const obj2 = structuredClone(obj1)

obj2.nested.push(2)

console.log(obj1.nested.at(0)) // Output: 1
```

## References

[https://developer.mozilla.org/en-US/docs/Web/API/structuredClone](https://developer.mozilla.org/en-US/docs/Web/API/structuredClone)
