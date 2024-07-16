---
title: Picking colors straight on the browser
description: Eye Dropper API
category: Web
date: 1719913968533
image: "/images/dropper-icon.png"
---

## Eye Dropper API

Eye Dropper API lets users pick a color from their screen, even if it's outside of the browser window. Straight to the point, you can use it like this

```js
const eyeDropper = new EyeDropper()

eyeDropper.open().then(color => {
  console.log("Picked color:", color)
})
```

When the `open` method is called, a user will get a dropper like this.

![Dropper](/images/dropper.png)

And the output will be like this

```js
"Picked color: {sRGBHex: '#6cb8ff'}"
```

## Limitations

Since the Eye Dropper API is an expermiental API, it is not widely supported for now. Also, for the security, you can't call the `open` method without any user action (like the Clipboard API).

## References

https://developer.mozilla.org/en-US/docs/Web/API/EyeDropper_API