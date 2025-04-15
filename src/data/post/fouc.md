---
title: Fixing the flickering when changing themes in Astro
description: With TailwindCSS
category: Web
date: 1721134506591
image: "/images/abort-it.png"
---

## Flickering

Prior to this post, this blog site had a flickering problem changing themes. And as you can see it below, it was quite annoying.

![Flickering](/images/flickering.gif)

And I thought it was unfixable and let it be because Astro is MPA and blahblahblah... until I found [this article](https://tarasov.dev/blog/how-to-add-dark-theme-in-astro/) and [this article](https://axellarsson.com/blog/astrojs-prevent-dark-mode-flicker/). Their site wasn't flickering even though it didn't use the SPA plugin. The method they used is to put the login that adds the `dark` class to the `<html>` element into the inline `<script>` tag in `<head>` like the code shown below.

```html
<script is:inline>
  localStorage.dark ??= String(
    window.matchMedia("(prefers-color-scheme: dark)").matches,
  )

  if (localStorage.dark == "true")
    document.documentElement.classList.add("dark")
  else document.documentElement.classList.remove("dark")
</script>
```

But, it didn't work for me at first. So I grinded for roughly 30 mins to find the fix and I got an idea - the ViewTransitions. I instantly removed the `<ViewTransitions>` tag and it finally worked.

![Fixed Flickering](/images/fixed-flickering.gif)

## References

https://en.wikipedia.org/wiki/Flash_of_unstyled_content
https://tarasov.dev/blog/how-to-add-dark-theme-in-astro/
https://axellarsson.com/blog/astrojs-prevent-dark-mode-flicker/