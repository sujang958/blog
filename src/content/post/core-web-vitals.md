---
title: Core Web Vitals
description: Recommendations for LCP, TTFB, FID, INP announced at Google I/O.
category: Web
date: 1684936123984
image: "/images/core_web_vitals.png"
---

This article is a summary of website optimization methods presented at [Google I/O 2023](https://io.google/2023/program/8d0bf949-1933-4358-b41a-561f8678974c/).

## Largest Contentful Paint

### Ensure the LCP resource is discovered from the HTML source

This helps browser’s preload scanner find and load the images.

`background-image` and `loading="lazy"` properties may have discoverability problems.

```html
<img src="/adsf.jpg" loading="lazy" />
<img style="background-image: url(asdf.jpg)" />
<img data-src="/asdf.jpg" />
```

To fix this, you can use a traditional image element, or add a preload link.

```html
<img src="/adsf.jpg" alt="asdf" />

<link rel="preload" href="/adsf.jpg" as="image" />
```

### Ensure the LCP resource is prioritized

Using the new Fetch priority API can help prioritize the resource.

```html
<img src="lcp.jpg" alt="..." fetchpriority="high" />
```

> 💡 Note: this feature can cause compatibillity issues ([browser_compatibility](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/fetchPriority#browser_compatibility))

### Use a CDN to optimize document and resource TTFB

_TTFB means “time to first byte”_

Browser cannot load any resources until it receives the first byte of the initial HTML document response. The sooner you can get the first bytes to the browser the sooner the browser can start processing it.

So, the ways to reduce TTFB is to **reduce the distance between users and servers** and **cache the content**.

## Cumulative Layout Shift

### Set explicit sizes on any content loaded from the page

Example: an image without dimensions will cause CLS.

```html
<img src="adf.jpg" alt="asdf" />

<!-- Explicitly setting width and height -->
<img src="adf.jpg" alt="asdf" width="200" height="200" />
```

```css
video {
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;
}
```

```css
.ad {
  min-height: 1rem;
}
```

### Ensure pages are eligible for the bfcache

[bfcache](https://web.dev/i18n/ko/bfcache/)

Chrome dev tools → Application → Back/forward cache test

### Avoid animations/transitions that use layout-inducing CSS properties

Layout-inducing animations make the browser layout the page again, so the browser has to do more work. The `absolute` positioned elements are also the same. Don’t use `top` , `right`, `left`, and `bottom` properties. Use non-layout-inducing CSS properties like `translate`, `scale`, `rotate`, `skew`, `matrix`, and `opacity`.

## First Input Delay / Interactions to Next Paint

### Avoid or break up long tasks

[https://web.dev/optimize-long-tasks/](https://web.dev/optimize-long-tasks/)

### Avoid unnecessary JavaScript

chrome devtools coverage feature, code splitting

### Avoid large rendering updates

Keep your DOM size small, CSS contain or content-visibillity, only use `requestAnimationFrame` for critical visual updates.

### Useful Tools

[PageSpeed Insights](https://pagespeed.web.dev)
