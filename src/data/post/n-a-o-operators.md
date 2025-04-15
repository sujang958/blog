---
title: "??=, ||=, &&="
description: Another weird operator to save us from infinite if statements.
category: JavaScript
date: 1681557813484
image: "/images/nullish_assign_operator.png"
---

Another weird operator to save us from infinite `if` statements.

## Falsy

A Falsy is a value considered false in a boolean context.
The following values are the falsy values in Javascript

`null`, `undefined`, `false`, `NaN`, `0`, `-0`, `0n`, `""`, `document.all`

## Truthy

A Truthy value is a value considered true in a boolean context.
If values are not falsy, then they’re all truthy.

## Nullish

A Nullish value is the value which is either `null` or `undefined`, which is always falsy.

## &&= Logical AND assignment

This operator assigns the right term to the left term if the left term is `truthy`.

```js
let truthyValue = 1
let falsyValue = false

truthyValue &&= 2
falsyValue &&= 3

console.log(truthyValue, falsyValue)
// Expected output: 2, false
```

## ||= **Logical OR assignment**

This operator assigns the right term to the left term if the left term is `falsy`.

```js
let truthyValue = 1
let falsyValue = false

truthyValue ||= 2
falsyValue ||= 3

console.log(truthyValue, falsyValue)
// Expected output: 1, 3
```

## ??= **Nullish coalescing assignment**

This operator assigns the right term to the left term if the left term is `nullish`.

```js
let truthyValue = 1
let falsyValue = false
let nullishValue = null

truthyValue ??= 2
falsyValue ??= 3
nullishValue ??= "Hola"

console.log(truthyValue, falsyValue, nullishValue)
// Expected output: 1, false, Hola
```

## References

[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)
