---
title: "Promise.allSettled"
description: Save your innocent promise values
category: JavaScript
date: 1681738568962
image: "/images/allSettled.png"
---

## Promise

Promises are a powerful abstraction for asynchronous programming in JavaScript. They allow us to write code that is easier to read and maintain than traditional callbacks, as well as avoid common pitfalls like callback hell.

## Promise.all()

The Promise.all() function is a particularly useful tool for working with multiple Promises at once. It takes an array of Promises as input and returns a Promise that resolves when all of the input Promises have resolved, or rejects when any of them reject.

```ts
const [result1, result2] = await Promise.all([
  fetch("http://site.site"),
  fetch("http://site.site"),
])
```

## Limitations of `Promise.all`

One limitation of Promise.all() is that it will reject as soon as any of the input Promises reject. This can be frustrating if you want to wait for all of the Promises to settle, even if some of them reject. That's where Promise.allSettled() comes in.

## The Solution: `Promise.allSettled()`

This function works similarly to Promise.all(), but it always resolves, even if some of the input Promises reject. The resulting Promise resolves to an array of objects, one for each input Promise, indicating whether the Promise fulfilled or rejected and the value or reason.

In this code, the `greet` function rejects with a 50% chance. If we had used `Promise.all` instead of `Promise.allSettled`, we wouldn't have gotten any value if we had a rejected function. But, with `Promise.allSettled`,
we can get results of the functions without any errors. The rejected functions have a `reason` property instead of the `value` property, which is present in the fulfilled functions.

```ts
const greet = async (name: string) => {
  const random = Math.random() * 10

  if (Math.floor(random) < 5) {
    throw new Error(`I don't like your name, ${name}`)
  }

  return `Hello ${name}`
}

Promise.allSettled([
  greet("John"),
  greet("Domingo"),
  greet("Juan"),
  greet("David"),
]).then((results) => {
  for (const result of results) {
    console.log(result)
  }
})
```

```js
{ status: 'fulfilled', value: 'Hello John' }
{ status: 'fulfilled', value: 'Hello Domingo' }
{ status: 'fulfilled', value: 'Hello Juan' }
{
  status: 'rejected',
  reason: Error: I don't like your name, David
      at greet (/workspaces/dev/asdf.ts:5:11)
      at Object.<anonymous> (/workspaces/dev/asdf.ts:15:3)
      at Module._compile (node:internal/modules/cjs/loader:1275:14)
      at Module.m._compile (/workspaces/dev/node_modules/ts-node/src/index.ts:1618:23)
      at Module._extensions..js (node:internal/modules/cjs/loader:1329:10)
      at Object.require.extensions.<computed> [as .ts] (/workspaces/dev/node_modules/ts-node/src/index.ts:1621:12)
      at Module.load (node:internal/modules/cjs/loader:1133:32)
      at Function.Module._load (node:internal/modules/cjs/loader:972:12)
      at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:83:12)
      at phase4 (/workspaces/dev/node_modules/ts-node/src/bin.ts:649:14)
}
```
