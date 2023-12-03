---
title: AbortController
description: how to cancel your web requests.
category: JavaScript
date: 1701170294464
image: "/images/abort-it.png"
---

Let&#039;s say you find yourself in a specific situation: a user sends a request to an external HTTP server and then immediately navigates back in your SPA application. After the user moves on, the data coming from that request is not needed, but the request is still sent to the server. This is an obvious waste of resources. However, it doesn&#039;t affect the user&#039;s screen, so it&#039;s not a big deal.

However, the user navigates forward immediately after immediately navigating back, your SPA application will send a request again. And if each response from those requests is different from each other, it can bring the user Cumulative Layout Shift (CLS).

And that&#039;s one of the reasons why AbortController exists. AbortController is used to cancel the web requests when desired. If you cancel the web requests when a component is unmounted, you can fix the problems above.

```javascript
const SomeComponent = () => {
  useEffect(() => {
    const controller = new AbortController()

    fetch("http://someurl", { signal: controller.signal })

    return () => {
      controller.abort()
    }
  }, [])
}
```

This is often done by data-fetching libraries like `react-query` or `swr`.
