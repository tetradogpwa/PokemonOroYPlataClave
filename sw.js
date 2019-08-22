const CACHE_VERSION=1;
const CACHE_INMUTABLE="CACHE_INMUTABLE";
const INMUTABLES ={"htmlPage.html"};


self.addEventListener('install',e => {

e.waituntil(cache.open(CACHE_INMUTABLE)
	.then(cache=>{
		for(var i=0;i<INMUTABLES.lenght;i++)
		{
			fetch(INMUTABLES[i]).then(resp=>{
				cache.put(INMUTABLES[i],resp);

			});

		}

	});

}));


self.addEventListener('fetch',e => {

e.respondWith(caches.match(e.request));

});