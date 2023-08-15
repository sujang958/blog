const cacheName = "caches"

self.addEventListener("install", (e) => {
  console.log("[Service Worker] Install")
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      console.log("[Service Worker] Caching all: contentToChache")

      return cache.addAll(["/"])
    }),
  )
})

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((r) => {
      return (
        r ||
        fetch(e.request).then((response) => {
          return caches.open(cacheName).then((cache) => {
            console.log(
              "[Service Worker] Caching new resource: " + e.request.url,
            )

            cache.put(e.request, response.clone())

            return response
          })
        })
      )
    }),
  )
})
