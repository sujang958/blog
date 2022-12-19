---
layout: "../../layouts/MarkdownLayout.astro"
title: Building a blog with Astro
id: building-a-blog-with-astro
description: I built my blog with Astro, and the performance is legit. See how fast it is.
category: Frontend
date: 1671446419181
image: "/images/astro-logo.png"
---

## **What is Astro?**

Astro is an all-in-one web framework for building fast, content-focused websites.  
_- The Official Introduction_

## **Why I chose Astro**

Astro has a lot of attractive features. Among them, I was really suprised by the feature, "Zero JS, by default". Also, Astro was designed for building content-rich website and supports Markdown by default. It's fit to make a blog with Astro. So I chose Astro

## **Astro's key features**

### MPA

When I first saw an Astro project, it looks like a Svelte project.
Both have similar file structure but there're many differences between two great frameworks. Astro is an MPA framework and it leverages server-side rendering as much as possible in contrast to other frameworks nowadays

There're many MPA frameworks like Django, PHP, etc, However, Astro's MPA is unique from other MPA frameworks. Traditional MPA frameworks don't care what language you use as a server language, but Astro uses JavaScript for the server language. This makes it possible to render UI components on both the server and the client. It makes the website way faster.

### Astro Islands

If you know one of React, Svelte, Vue, SolidJS, etc, you can use it with **zero client-side JavaScript** by default.
Astro automatically renders components written in frameworks above to 100% HTML which menas there's no client-side JavaScript.

But sometimes, JavaScript is required for creating interactive UI.
Instead of the entire page becoming an SPA-like application, Astro creates an island. The rest of the website is still static and zero JS.
We call this "Partial Hydration".

### Easy to bring Intergrations

Astro has something called Ingergrations. It allows you to add new functionality and behaviors for your project easily, just a few lines of code.

I used Astro Intergrations to add [TailwindCSS], one of my favorites. I typed only `yarn astro add tailwind` and pressed a few of enter keys, then I just became able to use TailwindCSS immediately. It's super easy.

## **Performance**


<!-- Links -->

[tailwindcss]: https://tailwindcss.com/
