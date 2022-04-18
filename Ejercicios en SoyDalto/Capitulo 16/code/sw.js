let version = "version 4"

self.addEventListener("install", ()=>{
    console.log("instalando service worker");
    caches.open(version).then(cache=>{
        cache.addAll(["../offLineWeb.html","off.js","sw.js"]).then(res =>{
            console.log("informacion cacheada");
        }).catch(e=>{
            console.log(e);
        })
    })
})
self.addEventListener("activate", ()=>{
    caches.keys().then(key=>{
        return Promise.all(
            key.map(cache=>{
                if(cache !== version){
                    console.log("cache antiguo eliminado");
                    return caches.delete(cache);
                }
            })
        )
    })
})
self.addEventListener("fetch", e =>{
    e.respondWith(async ()=>{
        const respuestaEnCache = await caches.match(e.request);
        if(respuestaEnCache) return respuestaEnCache;
        return fetch(e.request);
    })
})