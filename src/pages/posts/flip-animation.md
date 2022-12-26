---
layout: "../../layouts/MarkdownLayout.astro"
title: What is the FLIP animation?
id: flip-animation
description: What is the FLIP animation and how dose it work? (the icon's attribution in the article)
category: Frontend
date: 1672058110769
image: "/images/animation-icon.png"
---

<a href="https://www.flaticon.com/free-icons/animation" title="animation icons">Animation icons created by Freepik - Flaticon</a>

## **What is the FLIP animation?**

The FLIP animation is first introduced in Google Chrome Dev Summit in 2014.

It's the animation that computes the final values beforehand only using scale, transform, opacity to animate an element.

FLIP is the abbreviation of First, Last, Invert, Play.
It means the step of the FLIP animation.

### First

Compute the element's position before it animates.

### Last

Compute the element's position after it animates.

### Invert

Literally Invert the two values you computed above.

### Play

It's time to play the animation. You can just remove the value you inverted above.

That's it! isn't it easy?


## **Demo**

<div class="flex flex-col space-y-8">
  <div>
      This is the First position.
      <div class="bg-blue-500 h-16 w-16 rounded-lg transition duration-300" ></div>
  </div>
  <div>
    And this is the Last position.
    <div
      class="bg-blue-500 h-16 w-16 rounded-lg transform-gpu ml-24 transition duration-300"
    ></div>
  </div>
  <div>
    Then apply the inverted value so the element is at the first position.
    <div
      class="bg-blue-500 h-16 w-16 rounded-lg transform-gpu -translate-x-24 ml-24 transition duration-300"
    ></div>
  </div>
  <div>
    And just remove the inverted value.
    <div
      id="box"
      class="bg-blue-500 h-16 w-16 rounded-lg transform-gpu -translate-x-24 ml-24 transition duration-300"
    ></div>
    <div class="flex flex-row items-center space-x-4 mt-4">
      <button class="bg-purple-500 text-white rounded-xl px-4 py-2 mt-2" id="animate-button">Animate</button>
      <button class="bg-white text-black rounded-xl px-4 py-2 mt-2" id="reset-button">Reset</button>
    </div>
  </div>
</div>

<script is:inline>
  const box = document.getElementById("box")

  document.getElementById("reset-button").addEventListener("click", () => {
    box.classList.add("-translate-x-24")
  })

  document.getElementById("animate-button").addEventListener("click", () => {
    box.classList.remove("-translate-x-24")
  })
</script>

<br />

## **Why should we animate with FLIP?**

FLIP only uses scale, transform, opacity, and scale.
These property don't make the browser re-compute other elements' layout.
But if you animate an element with its width, height, etc, then the browser should re-compute other elements' layout recursively.
If that computing takes greater than 16.7ms, the animation will be stuttering.

Flip is the solution of this. Flip computes the values beforehand and only uses not computing-expensive properties so the animation can go smooth.

![The Performance Image](/images/flip-animation/flip-performance.avif)
_src: https://web.dev/chrome-dev-summit/_
 
## **Notes**

As I mentioned earlier, the computing time takes greater than 100ms, the animation will be stuttering which means it's not good. So we should use computing-cheap properties like transform, scale, etc.