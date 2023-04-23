---
title: "Closures and Lexical Scoping"
description: For tech interviews
category: JavaScript
date: 1682211885500
image: "/images/closure.png"
---

> A closure is the combination of a function bundled together (enclosed) with references to its surrounding state. _(MDN)_

## Lexical Scoping

Lexical scoping is a programming language concept that determines the scope of a variable based on its place in the source code, rather than its place in the execution context. In other words, the scope of a variable is determined by the block of code in which it is declared, not by the function in which it is used.

## Closure

In JavaScript, a closure is a function that retains access to variables in its lexical scope, even after the outer function has returned. This means that the inner function can still access and manipulate the variables of the outer function, even if the outer function has already completed its execution.

When a function is defined inside another function, the inner function forms a closure. This means that the inner function has access to the variables in its parent function's scope, even after the parent function has finished executing. Closures are useful for creating private variables and functions, and for implementing the module pattern in JavaScript.

```js
function makeCounter() {
  let count = 0

  return function () {
    return count++
  }
}

let counter = makeCounter()

console.log(counter()) // 0
```

Then, how does the anonymous function remember its lexical environment?

## `[[Environment]]`

Every function has a hidden property called `[[Environment]]` , which stores the reference to the lexical scope where the function was defined. So, in the code above, the `counter.[[Environment]]` has the reference to the lexical scope which has the value of `count`.

Each time the `counter` function is called, a new lexical scope is created that references the lexical scope stored in the counter `counter.[[Environment]]` as an outer lexical scope. When we call the `counter` function, JavaScript will find the `count` variable. First, JavaScript tries to find it in its lexical scope. But, there is not the `count` variable. So, JavaScript now tries to find `count` variable in the outer lexical scope and found it! Now it's time to increase the value of the `count` variable. And this operation works on the lexical scope where the variable is stored. So the `counter` function can remember the valule of `count` variable.

## Note: memory leaks

One important consequence of closures is that they can create memory leaks. Because the inner function retains a reference to the outer function's variables, those variables cannot be garbage collected until the inner function is also garbage collected. This means that if you are not careful, you can end up with a lot of unused memory in your application.

## References

[https://javascript.info/closure](https://javascript.info/closure)
