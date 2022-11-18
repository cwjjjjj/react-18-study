self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('cache').then(cache => {
      // 缓存index.html文件
      return cache.add('./index.html')
    })
  )
})

self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).catch(() => {
      // 匹配返回缓存资源
      return caches.match('./index.html')
    })
  )
})