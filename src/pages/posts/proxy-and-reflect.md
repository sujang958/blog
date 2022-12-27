---
layout: "../../layouts/MarkdownLayout.astro"
title: "JS API: Proxy and Reflect"
id: proxy-and-reflect
description: The proxy and reflect features are amazing!
category: JavaScript
date: 1672144822551
image: "/images/incognito.png"
---

## **What are they?**

Have you ever seen the methods like [[Get]], [[Set]] before?
They're JavaScript's internal methods which defind JavaScript's default actions.
The Proxy allows you to intercept events that go to an object and define default actions like the [[Get]], [[Set]] I mentioned above.

Imagine [Nodejs's EventEmitter]. Suppose that setting and getting properties are the events that go to the EventEmitter in Nodejs and you can define what it does when the event arrives.

## **Where I used them**

I was making a dark theme feature in [my portfolio website] with Astro.
I could use Svelte to implement it but I didn't use it. I used Vanilla JS instead.
But there was a problem.  

The state management is uncomfortable than Svelte. When the value is changed, I can't detect if it's changed or not. I used proxy and reflect to solve this problem. I wrapped the theme variable with a Proxy object and defined the action of [[Set]] to save and apply theme when it's changed.

Meanwhile, the Proxy defines the Default action of an object. That means if you don't add a line that adds value in the action defined in Proxy, the value won't change.
Now, you might want to add default actions in your own actions.
The Reflect object solves this problem. It has JavaScript's default actions.
All you have to do is just add `return Reflect.set(target, key, newValue)`, Simple.


## **References**
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect

<!-- Links -->

[Nodejs's EventEmitter]: https://nodejs.org/api/events.html#class-eventemitter
[my portfolio website]: https://sujang.xyz
