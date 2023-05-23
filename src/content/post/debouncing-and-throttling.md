---
title: Debouncing and Throttling
description: How to handle expensive event listeners.
category: JavaScript
date: 1684845498394
image: "/images/debouncing_throttling.png"
---

Registering an expensive event listner to a frequent event is a very bad thing that everyone knows. But sometimes you'll need to face situations like calling the server and storing to-dos in the `onInput` event. This will overload the server. Then what should we do?

## Debouncing

Debouncing is a technique used to control the frequency of a function's execution. When debouncing a function, it ensures that the function is invoked only after a specified delay has passed since the last invocation.

When you call a debounced function, the already scheduled function is canceled and a new function is scheduled.

```js
function debounce(func, delay) {
  let timerId

  return function (...args) {
    clearTimeout(timerId)

    timerId = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}

function handleInput() {
  console.log("Debounced input handling")
}

const debouncedHandleInput = debounce(handleInput, 300)

document
  .getElementById("myInput")
  .addEventListener("input", debouncedHandleInput)
```

## Throttling

Throttling is a technique used to limit the rate at which a function can be executed. When throttling a function, it ensures that the function is invoked at most once within a specified time interval, regardless of how many times it is called during that interval.

When calling a throttled function, if an already called function is still waiting for the delay, the call is ignored.

```js
function throttle(func, delay) {
  let canRun = true

  return function (...args) {
    if (!canRun) return

    canRun = false

    setTimeout(() => {
      func.apply(this, args)
      canRun = true
    }, delay)
  }
}

function handleScroll() {
  console.log("Throttled scroll handling")
}

const throttledHandleScroll = throttle(handleScroll, 200)

window.addEventListener("scroll", throttledHandleScroll)
```
