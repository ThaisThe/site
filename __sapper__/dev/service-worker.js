(function () {
	'use strict';

	// This file is generated by Sapper — do not edit it!
	const timestamp = 1590183132542;

	const files = [
		"service-worker-index.html",
		"CNAME",
		"assets/audio/一二葉.mp3",
		"assets/audio/一芽.mp3",
		"assets/audio/一芽一二葉.mp3",
		"assets/audio/一芽一二葉嫩芽.mp3",
		"assets/audio/一芽一葉.mp3",
		"assets/audio/一芽三四葉.mp3",
		"assets/audio/一芽三葉.mp3",
		"assets/audio/一芽二三葉.mp3",
		"assets/audio/一芽二葉.mp3",
		"assets/audio/三葉.mp3",
		"assets/audio/中國四川.mp3",
		"assets/audio/中國安徽.mp3",
		"assets/audio/中國廣東.mp3",
		"assets/audio/中國廣西.mp3",
		"assets/audio/中國江蘇.mp3",
		"assets/audio/中國河南.mp3",
		"assets/audio/中國浙江.mp3",
		"assets/audio/中國湖南.mp3",
		"assets/audio/中國福建.mp3",
		"assets/audio/中國貴州.mp3",
		"assets/audio/中國雲南.mp3",
		"assets/audio/信阳毛尖.mp3",
		"assets/audio/六堡茶.mp3",
		"assets/audio/六安瓜片.mp3",
		"assets/audio/其他拼配.mp3",
		"assets/audio/冬季.mp3",
		"assets/audio/凍頂烏龍.mp3",
		"assets/audio/北港毛尖.mp3",
		"assets/audio/君山銀針.mp3",
		"assets/audio/單壯葉.mp3",
		"assets/audio/四季春.mp3",
		"assets/audio/坦洋.mp3",
		"assets/audio/壽眉.mp3",
		"assets/audio/夏季.mp3",
		"assets/audio/大紅袍.mp3",
		"assets/audio/太平猴魁.mp3",
		"assets/audio/奇丹.mp3",
		"assets/audio/嫩芽.mp3",
		"assets/audio/安化黑茶.mp3",
		"assets/audio/安溪.mp3",
		"assets/audio/安溪鐵觀音.mp3",
		"assets/audio/小種紅茶.mp3",
		"assets/audio/小菜茶羣體種.mp3",
		"assets/audio/工夫紅茶.mp3",
		"assets/audio/平陽特皁茶.mp3",
		"assets/audio/平陽特色羣體品種.mp3",
		"assets/audio/平陽黃湯.mp3",
		"assets/audio/廣東大葉青.mp3",
		"assets/audio/廣東烏龍.mp3",
		"assets/audio/政和大白茶.mp3",
		"assets/audio/文山包種.mp3",
		"assets/audio/文山區.mp3",
		"assets/audio/春季.mp3",
		"assets/audio/景谷大白茶.mp3",
		"assets/audio/月光白.mp3",
		"assets/audio/木柵.mp3",
		"assets/audio/木柵鐵觀音.mp3",
		"assets/audio/本山.mp3",
		"assets/audio/本山茶.mp3",
		"assets/audio/東方美人.mp3",
		"assets/audio/桂青.mp3",
		"assets/audio/正山小種.mp3",
		"assets/audio/武夷山市.mp3",
		"assets/audio/武夷市.mp3",
		"assets/audio/武夷水仙.mp3",
		"assets/audio/武夷肉桂.mp3",
		"assets/audio/武夷野生奇種.mp3",
		"assets/audio/毛蟹.mp3",
		"assets/audio/毛蟹茶.mp3",
		"assets/audio/湄潭翠芽.mp3",
		"assets/audio/溈山毛尖.mp3",
		"assets/audio/滇紅.mp3",
		"assets/audio/潮州市.mp3",
		"assets/audio/炒青绿茶.mp3",
		"assets/audio/煮泡法.mp3",
		"assets/audio/當地品種.mp3",
		"assets/audio/白毛猴.mp3",
		"assets/audio/白毫銀針.mp3",
		"assets/audio/白牡丹.mp3",
		"assets/audio/白茶.mp3",
		"assets/audio/硬枝紅心烏龍.mp3",
		"assets/audio/碧螺春.mp3",
		"assets/audio/祁門種.mp3",
		"assets/audio/祁門紅茶.mp3",
		"assets/audio/福安大白茶.mp3",
		"assets/audio/福鼎大毫茶.mp3",
		"assets/audio/秋季.mp3",
		"assets/audio/竹葉青.mp3",
		"assets/audio/紅碎茶.mp3",
		"assets/audio/紅茶.mp3",
		"assets/audio/綠寶石.mp3",
		"assets/audio/綠茶.mp3",
		"assets/audio/翠玉.mp3",
		"assets/audio/肉桂.mp3",
		"assets/audio/臺灣.mp3",
		"assets/audio/臺灣南投.mp3",
		"assets/audio/臺灣烏龍.mp3",
		"assets/audio/臺灣臺北.mp3",
		"assets/audio/芽葉.mp3",
		"assets/audio/茶壺泡法.mp3",
		"assets/audio/茶杯泡法.mp3",
		"assets/audio/茶盅泡法.mp3",
		"assets/audio/蒙頂黃芽.mp3",
		"assets/audio/蓋碗泡法.mp3",
		"assets/audio/都勻毛尖.mp3",
		"assets/audio/金萱.mp3",
		"assets/audio/金駿眉.mp3",
		"assets/audio/鐵觀音.mp3",
		"assets/audio/閩北烏龍.mp3",
		"assets/audio/雲南大白茶.mp3",
		"assets/audio/雲南大葉種.mp3",
		"assets/audio/雲南大葉種拼配.mp3",
		"assets/audio/雲南白茶磚.mp3",
		"assets/audio/霍山金雞種.mp3",
		"assets/audio/霍山黃大茶.mp3",
		"assets/audio/霍山黃芽.mp3",
		"assets/audio/青心大某.mp3",
		"assets/audio/青心烏龍.mp3",
		"assets/audio/青磚茶.mp3",
		"assets/audio/青茶.mp3",
		"assets/audio/高山茶.mp3",
		"assets/audio/鳳凰單叢.mp3",
		"assets/audio/鳳凰水仙.mp3",
		"assets/audio/黃大茶.mp3",
		"assets/audio/黃小茶.mp3",
		"assets/audio/黃旦.mp3",
		"assets/audio/黃芽茶.mp3",
		"assets/audio/黃茶.mp3",
		"assets/audio/黃金桂.mp3",
		"assets/audio/黄山毛峰.mp3",
		"assets/audio/黑茶.mp3",
		"assets/audio/龍井茶.mp3",
		"assets/danslajungle.png",
		"assets/favicon.ico",
		"assets/font/LexendDeca-Regular.ttf",
		"assets/global.css",
		"assets/ico-question.svg",
		"assets/ico-top.svg",
		"assets/icons/gaiwan.svg",
		"assets/icons/granpa.svg",
		"assets/icons/kettle.svg",
		"assets/icons/mountain.svg",
		"assets/icons/sound.svg",
		"assets/icons/teapot.svg",
		"assets/icons/temperature.svg",
		"assets/icons/temps.svg",
		"assets/icons/zhong.svg",
		"assets/icons/冬季.svg",
		"assets/icons/夏季.svg",
		"assets/icons/春季.svg",
		"assets/icons/秋季.svg",
		"assets/logo.jpg",
		"assets/media/compagnie-coloniale.jpg",
		"assets/media/type-de-the.mm",
		"assets/media/types-de-the.svg",
		"assets/thes/信阳毛尖.jpg",
		"assets/thes/六堡茶.jpg",
		"assets/thes/六堡黑茶.jpg",
		"assets/thes/六安瓜片.jpg",
		"assets/thes/凍頂烏龍.jpg",
		"assets/thes/凍頂烏龍.jpg~",
		"assets/thes/坦洋.jpg",
		"assets/thes/坦洋.jpg~",
		"assets/thes/壽眉.jpg",
		"assets/thes/壽眉.jpg~",
		"assets/thes/大紅袍.jpg",
		"assets/thes/太平猴魁.jpg",
		"assets/thes/安溪鐵觀音.jpg",
		"assets/thes/月光白.jpg",
		"assets/thes/木柵鐵觀音.jpg",
		"assets/thes/本山茶.jpg",
		"assets/thes/東方美人.jpg",
		"assets/thes/正山小種.jpg",
		"assets/thes/武夷水仙.jpg",
		"assets/thes/毛蟹茶.jpg",
		"assets/thes/溈山毛尖.jpg",
		"assets/thes/溈山毛尖.jpg~",
		"assets/thes/滇紅.jpg",
		"assets/thes/珠茶.jpg",
		"assets/thes/白毫銀針.jpg",
		"assets/thes/白牡丹.jpg",
		"assets/thes/碧螺春.jpg",
		"assets/thes/祁門紅茶.jpg",
		"assets/thes/肉桂.jpg",
		"assets/thes/蒙頂黃芽.jpg",
		"assets/thes/蒙頂黃芽.jpg~",
		"assets/thes/金駿眉.jpg",
		"assets/thes/雲南白茶磚.jpg",
		"assets/thes/霍山黃大茶.jpg",
		"assets/thes/霍山黃芽.jpg",
		"assets/thes/青磚茶.jpg",
		"assets/thes/頂谷大方.jpg",
		"assets/thes/鳳凰單叢.jpg",
		"assets/thes/黃金桂.jpg",
		"assets/thes/黄山毛峰.jpg",
		"assets/thes/龍井茶.jpg",
		"manifest.json"
	];

	const shell = [
		"client/client.27d5c360.js",
		"client/index.f92f5ce3.js",
		"client/IconTeaType.4fd94d4f.js",
		"client/liste-des-thes-[type].a51bb957.js",
		"client/nous-contacter.c772dcfb.js",
		"client/index.6e6c5717.js",
		"client/[slug].d9fcd82d.js",
		"client/fiche-[ideogram].f428f2c0.js",
		"client/termes.a74ddbd9.js",
		"client/sapper-dev-client.89e34bae.js",
		"client/client.9ab2d66d.js"
	];

	const ASSETS = `cache${timestamp}`;

	// `shell` is an array of all the files generated by the bundler,
	// `files` is an array of everything in the `static` directory
	const to_cache = shell.concat(files);
	const cached = new Set(to_cache);

	self.addEventListener('install', event => {
		event.waitUntil(
			caches
				.open(ASSETS)
				.then(cache => cache.addAll(to_cache))
				.then(() => {
					self.skipWaiting();
				})
		);
	});

	self.addEventListener('activate', event => {
		event.waitUntil(
			caches.keys().then(async keys => {
				// delete old caches
				for (const key of keys) {
					if (key !== ASSETS) await caches.delete(key);
				}

				self.clients.claim();
			})
		);
	});

	self.addEventListener('fetch', event => {
		if (event.request.method !== 'GET' || event.request.headers.has('range')) return;

		const url = new URL(event.request.url);

		// don't try to handle e.g. data: URIs
		if (!url.protocol.startsWith('http')) return;

		// ignore dev server requests
		if (url.hostname === self.location.hostname && url.port !== self.location.port) return;

		// always serve static files and bundler-generated assets from cache
		if (url.host === self.location.host && cached.has(url.pathname)) {
			event.respondWith(caches.match(event.request));
			return;
		}

		// for pages, you might want to serve a shell `service-worker-index.html` file,
		// which Sapper has generated for you. It's not right for every
		// app, but if it's right for yours then uncomment this section
		/*
		if (url.origin === self.origin && routes.find(route => route.pattern.test(url.pathname))) {
			event.respondWith(caches.match('/service-worker-index.html'));
			return;
		}
		*/

		if (event.request.cache === 'only-if-cached') return;

		// for everything else, try the network first, falling back to
		// cache if the user is offline. (If the pages never change, you
		// might prefer a cache-first approach to a network-first one.)
		event.respondWith(
			caches
				.open(`offline${timestamp}`)
				.then(async cache => {
					try {
						const response = await fetch(event.request);
						cache.put(event.request, response.clone());
						return response;
					} catch(err) {
						const response = await cache.match(event.request);
						if (response) return response;

						throw err;
					}
				})
		);
	});

}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS13b3JrZXIuanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlX21vZHVsZXMvQHNhcHBlci9zZXJ2aWNlLXdvcmtlci5qcyIsIi4uLy4uL3NyYy9zZXJ2aWNlLXdvcmtlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGZpbGUgaXMgZ2VuZXJhdGVkIGJ5IFNhcHBlciDigJQgZG8gbm90IGVkaXQgaXQhXG5leHBvcnQgY29uc3QgdGltZXN0YW1wID0gMTU5MDE4MzEzMjU0MjtcblxuZXhwb3J0IGNvbnN0IGZpbGVzID0gW1xuXHRcInNlcnZpY2Utd29ya2VyLWluZGV4Lmh0bWxcIixcblx0XCJDTkFNRVwiLFxuXHRcImFzc2V0cy9hdWRpby/kuIDkuozokYkubXAzXCIsXG5cdFwiYXNzZXRzL2F1ZGlvL+S4gOiKvS5tcDNcIixcblx0XCJhc3NldHMvYXVkaW8v5LiA6Iq95LiA5LqM6JGJLm1wM1wiLFxuXHRcImFzc2V0cy9hdWRpby/kuIDoir3kuIDkuozokYnlq6noir0ubXAzXCIsXG5cdFwiYXNzZXRzL2F1ZGlvL+S4gOiKveS4gOiRiS5tcDNcIixcblx0XCJhc3NldHMvYXVkaW8v5LiA6Iq95LiJ5Zub6JGJLm1wM1wiLFxuXHRcImFzc2V0cy9hdWRpby/kuIDoir3kuInokYkubXAzXCIsXG5cdFwiYXNzZXRzL2F1ZGlvL+S4gOiKveS6jOS4ieiRiS5tcDNcIixcblx0XCJhc3NldHMvYXVkaW8v5LiA6Iq95LqM6JGJLm1wM1wiLFxuXHRcImFzc2V0cy9hdWRpby/kuInokYkubXAzXCIsXG5cdFwiYXNzZXRzL2F1ZGlvL+S4reWci+Wbm+W3nS5tcDNcIixcblx0XCJhc3NldHMvYXVkaW8v5Lit5ZyL5a6J5b69Lm1wM1wiLFxuXHRcImFzc2V0cy9hdWRpby/kuK3lnIvlu6PmnbEubXAzXCIsXG5cdFwiYXNzZXRzL2F1ZGlvL+S4reWci+W7o+ilvy5tcDNcIixcblx0XCJhc3NldHMvYXVkaW8v5Lit5ZyL5rGf6JiHLm1wM1wiLFxuXHRcImFzc2V0cy9hdWRpby/kuK3lnIvmsrPljZcubXAzXCIsXG5cdFwiYXNzZXRzL2F1ZGlvL+S4reWci+a1meaxny5tcDNcIixcblx0XCJhc3NldHMvYXVkaW8v5Lit5ZyL5rmW5Y2XLm1wM1wiLFxuXHRcImFzc2V0cy9hdWRpby/kuK3lnIvnpo/lu7oubXAzXCIsXG5cdFwiYXNzZXRzL2F1ZGlvL+S4reWci+iytOW3ni5tcDNcIixcblx0XCJhc3NldHMvYXVkaW8v5Lit5ZyL6Zuy5Y2XLm1wM1wiLFxuXHRcImFzc2V0cy9hdWRpby/kv6HpmLPmr5vlsJYubXAzXCIsXG5cdFwiYXNzZXRzL2F1ZGlvL+WFreWgoeiMti5tcDNcIixcblx0XCJhc3NldHMvYXVkaW8v5YWt5a6J55Oc54mHLm1wM1wiLFxuXHRcImFzc2V0cy9hdWRpby/lhbbku5bmi7zphY0ubXAzXCIsXG5cdFwiYXNzZXRzL2F1ZGlvL+WGrOWtoy5tcDNcIixcblx0XCJhc3NldHMvYXVkaW8v5YeN6aCC54OP6b6NLm1wM1wiLFxuXHRcImFzc2V0cy9hdWRpby/ljJfmuK/mr5vlsJYubXAzXCIsXG5cdFwiYXNzZXRzL2F1ZGlvL+WQm+WxsemKgOmHnS5tcDNcIixcblx0XCJhc3NldHMvYXVkaW8v5Zau5aOv6JGJLm1wM1wiLFxuXHRcImFzc2V0cy9hdWRpby/lm5vlraPmmKUubXAzXCIsXG5cdFwiYXNzZXRzL2F1ZGlvL+Wdpua0iy5tcDNcIixcblx0XCJhc3NldHMvYXVkaW8v5aO955yJLm1wM1wiLFxuXHRcImFzc2V0cy9hdWRpby/lpI/lraMubXAzXCIsXG5cdFwiYXNzZXRzL2F1ZGlvL+Wkp+e0heiijS5tcDNcIixcblx0XCJhc3NldHMvYXVkaW8v5aSq5bmz54y06a2BLm1wM1wiLFxuXHRcImFzc2V0cy9hdWRpby/lpYfkuLkubXAzXCIsXG5cdFwiYXNzZXRzL2F1ZGlvL+WrqeiKvS5tcDNcIixcblx0XCJhc3NldHMvYXVkaW8v5a6J5YyW6buR6Iy2Lm1wM1wiLFxuXHRcImFzc2V0cy9hdWRpby/lronmuqoubXAzXCIsXG5cdFwiYXNzZXRzL2F1ZGlvL+Wuiea6qumQteingOmfsy5tcDNcIixcblx0XCJhc3NldHMvYXVkaW8v5bCP56iu57SF6Iy2Lm1wM1wiLFxuXHRcImFzc2V0cy9hdWRpby/lsI/oj5zojLbnvqPpq5TnqK4ubXAzXCIsXG5cdFwiYXNzZXRzL2F1ZGlvL+W3peWkq+e0heiMti5tcDNcIixcblx0XCJhc3NldHMvYXVkaW8v5bmz6Zm954m555qB6Iy2Lm1wM1wiLFxuXHRcImFzc2V0cy9hdWRpby/lubPpmb3nibnoibLnvqPpq5Tlk4HnqK4ubXAzXCIsXG5cdFwiYXNzZXRzL2F1ZGlvL+W5s+mZvem7g+a5ry5tcDNcIixcblx0XCJhc3NldHMvYXVkaW8v5buj5p2x5aSn6JGJ6Z2SLm1wM1wiLFxuXHRcImFzc2V0cy9hdWRpby/lu6PmnbHng4/pvo0ubXAzXCIsXG5cdFwiYXNzZXRzL2F1ZGlvL+aUv+WSjOWkp+eZveiMti5tcDNcIixcblx0XCJhc3NldHMvYXVkaW8v5paH5bGx5YyF56iuLm1wM1wiLFxuXHRcImFzc2V0cy9hdWRpby/mloflsbHljYAubXAzXCIsXG5cdFwiYXNzZXRzL2F1ZGlvL+aYpeWtoy5tcDNcIixcblx0XCJhc3NldHMvYXVkaW8v5pmv6LC35aSn55m96Iy2Lm1wM1wiLFxuXHRcImFzc2V0cy9hdWRpby/mnIjlhYnnmb0ubXAzXCIsXG5cdFwiYXNzZXRzL2F1ZGlvL+acqOaftS5tcDNcIixcblx0XCJhc3NldHMvYXVkaW8v5pyo5p+16ZC16KeA6Z+zLm1wM1wiLFxuXHRcImFzc2V0cy9hdWRpby/mnKzlsbEubXAzXCIsXG5cdFwiYXNzZXRzL2F1ZGlvL+acrOWxseiMti5tcDNcIixcblx0XCJhc3NldHMvYXVkaW8v5p2x5pa5576O5Lq6Lm1wM1wiLFxuXHRcImFzc2V0cy9hdWRpby/moYLpnZIubXAzXCIsXG5cdFwiYXNzZXRzL2F1ZGlvL+ato+WxseWwj+eori5tcDNcIixcblx0XCJhc3NldHMvYXVkaW8v5q2m5aS35bGx5biCLm1wM1wiLFxuXHRcImFzc2V0cy9hdWRpby/mrablpLfluIIubXAzXCIsXG5cdFwiYXNzZXRzL2F1ZGlvL+atpuWkt+awtOS7mS5tcDNcIixcblx0XCJhc3NldHMvYXVkaW8v5q2m5aS36IKJ5qGCLm1wM1wiLFxuXHRcImFzc2V0cy9hdWRpby/mrablpLfph47nlJ/lpYfnqK4ubXAzXCIsXG5cdFwiYXNzZXRzL2F1ZGlvL+avm+ifuS5tcDNcIixcblx0XCJhc3NldHMvYXVkaW8v5q+b6J+56Iy2Lm1wM1wiLFxuXHRcImFzc2V0cy9hdWRpby/muYTmva3nv6Doir0ubXAzXCIsXG5cdFwiYXNzZXRzL2F1ZGlvL+a6iOWxseavm+Wwli5tcDNcIixcblx0XCJhc3NldHMvYXVkaW8v5ruH57SFLm1wM1wiLFxuXHRcImFzc2V0cy9hdWRpby/mva7lt57luIIubXAzXCIsXG5cdFwiYXNzZXRzL2F1ZGlvL+eCkumdkue7v+iMti5tcDNcIixcblx0XCJhc3NldHMvYXVkaW8v54Wu5rOh5rOVLm1wM1wiLFxuXHRcImFzc2V0cy9hdWRpby/nlbblnLDlk4HnqK4ubXAzXCIsXG5cdFwiYXNzZXRzL2F1ZGlvL+eZveavm+eMtC5tcDNcIixcblx0XCJhc3NldHMvYXVkaW8v55m95q+r6YqA6YedLm1wM1wiLFxuXHRcImFzc2V0cy9hdWRpby/nmb3niaHkuLkubXAzXCIsXG5cdFwiYXNzZXRzL2F1ZGlvL+eZveiMti5tcDNcIixcblx0XCJhc3NldHMvYXVkaW8v56Gs5p6d57SF5b+D54OP6b6NLm1wM1wiLFxuXHRcImFzc2V0cy9hdWRpby/noqfonrrmmKUubXAzXCIsXG5cdFwiYXNzZXRzL2F1ZGlvL+elgemWgOeori5tcDNcIixcblx0XCJhc3NldHMvYXVkaW8v56WB6ZaA57SF6Iy2Lm1wM1wiLFxuXHRcImFzc2V0cy9hdWRpby/npo/lronlpKfnmb3ojLYubXAzXCIsXG5cdFwiYXNzZXRzL2F1ZGlvL+emj+m8juWkp+avq+iMti5tcDNcIixcblx0XCJhc3NldHMvYXVkaW8v56eL5a2jLm1wM1wiLFxuXHRcImFzc2V0cy9hdWRpby/nq7nokYnpnZIubXAzXCIsXG5cdFwiYXNzZXRzL2F1ZGlvL+e0heeijuiMti5tcDNcIixcblx0XCJhc3NldHMvYXVkaW8v57SF6Iy2Lm1wM1wiLFxuXHRcImFzc2V0cy9hdWRpby/ntqDlr7bnn7MubXAzXCIsXG5cdFwiYXNzZXRzL2F1ZGlvL+e2oOiMti5tcDNcIixcblx0XCJhc3NldHMvYXVkaW8v57+g546JLm1wM1wiLFxuXHRcImFzc2V0cy9hdWRpby/ogonmoYIubXAzXCIsXG5cdFwiYXNzZXRzL2F1ZGlvL+iHuueBoy5tcDNcIixcblx0XCJhc3NldHMvYXVkaW8v6Ie654Gj5Y2X5oqVLm1wM1wiLFxuXHRcImFzc2V0cy9hdWRpby/oh7rngaPng4/pvo0ubXAzXCIsXG5cdFwiYXNzZXRzL2F1ZGlvL+iHuueBo+iHuuWMly5tcDNcIixcblx0XCJhc3NldHMvYXVkaW8v6Iq96JGJLm1wM1wiLFxuXHRcImFzc2V0cy9hdWRpby/ojLblo7rms6Hms5UubXAzXCIsXG5cdFwiYXNzZXRzL2F1ZGlvL+iMtuadr+azoeazlS5tcDNcIixcblx0XCJhc3NldHMvYXVkaW8v6Iy255uF5rOh5rOVLm1wM1wiLFxuXHRcImFzc2V0cy9hdWRpby/okpnpoILpu4Poir0ubXAzXCIsXG5cdFwiYXNzZXRzL2F1ZGlvL+iTi+eil+azoeazlS5tcDNcIixcblx0XCJhc3NldHMvYXVkaW8v6YO95Yu75q+b5bCWLm1wM1wiLFxuXHRcImFzc2V0cy9hdWRpby/ph5HokLEubXAzXCIsXG5cdFwiYXNzZXRzL2F1ZGlvL+mHkemnv+eciS5tcDNcIixcblx0XCJhc3NldHMvYXVkaW8v6ZC16KeA6Z+zLm1wM1wiLFxuXHRcImFzc2V0cy9hdWRpby/plqnljJfng4/pvo0ubXAzXCIsXG5cdFwiYXNzZXRzL2F1ZGlvL+mbsuWNl+Wkp+eZveiMti5tcDNcIixcblx0XCJhc3NldHMvYXVkaW8v6Zuy5Y2X5aSn6JGJ56iuLm1wM1wiLFxuXHRcImFzc2V0cy9hdWRpby/pm7LljZflpKfokYnnqK7mi7zphY0ubXAzXCIsXG5cdFwiYXNzZXRzL2F1ZGlvL+mbsuWNl+eZveiMtuejmi5tcDNcIixcblx0XCJhc3NldHMvYXVkaW8v6ZyN5bGx6YeR6Zue56iuLm1wM1wiLFxuXHRcImFzc2V0cy9hdWRpby/pnI3lsbHpu4PlpKfojLYubXAzXCIsXG5cdFwiYXNzZXRzL2F1ZGlvL+mcjeWxsem7g+iKvS5tcDNcIixcblx0XCJhc3NldHMvYXVkaW8v6Z2S5b+D5aSn5p+QLm1wM1wiLFxuXHRcImFzc2V0cy9hdWRpby/pnZLlv4Png4/pvo0ubXAzXCIsXG5cdFwiYXNzZXRzL2F1ZGlvL+mdkuejmuiMti5tcDNcIixcblx0XCJhc3NldHMvYXVkaW8v6Z2S6Iy2Lm1wM1wiLFxuXHRcImFzc2V0cy9hdWRpby/pq5jlsbHojLYubXAzXCIsXG5cdFwiYXNzZXRzL2F1ZGlvL+mzs+WHsOWWruWPoi5tcDNcIixcblx0XCJhc3NldHMvYXVkaW8v6bOz5Yew5rC05LuZLm1wM1wiLFxuXHRcImFzc2V0cy9hdWRpby/pu4PlpKfojLYubXAzXCIsXG5cdFwiYXNzZXRzL2F1ZGlvL+m7g+Wwj+iMti5tcDNcIixcblx0XCJhc3NldHMvYXVkaW8v6buD5pemLm1wM1wiLFxuXHRcImFzc2V0cy9hdWRpby/pu4Poir3ojLYubXAzXCIsXG5cdFwiYXNzZXRzL2F1ZGlvL+m7g+iMti5tcDNcIixcblx0XCJhc3NldHMvYXVkaW8v6buD6YeR5qGCLm1wM1wiLFxuXHRcImFzc2V0cy9hdWRpby/pu4TlsbHmr5vls7AubXAzXCIsXG5cdFwiYXNzZXRzL2F1ZGlvL+m7keiMti5tcDNcIixcblx0XCJhc3NldHMvYXVkaW8v6b6N5LqV6Iy2Lm1wM1wiLFxuXHRcImFzc2V0cy9kYW5zbGFqdW5nbGUucG5nXCIsXG5cdFwiYXNzZXRzL2Zhdmljb24uaWNvXCIsXG5cdFwiYXNzZXRzL2ZvbnQvTGV4ZW5kRGVjYS1SZWd1bGFyLnR0ZlwiLFxuXHRcImFzc2V0cy9nbG9iYWwuY3NzXCIsXG5cdFwiYXNzZXRzL2ljby1xdWVzdGlvbi5zdmdcIixcblx0XCJhc3NldHMvaWNvLXRvcC5zdmdcIixcblx0XCJhc3NldHMvaWNvbnMvZ2Fpd2FuLnN2Z1wiLFxuXHRcImFzc2V0cy9pY29ucy9ncmFucGEuc3ZnXCIsXG5cdFwiYXNzZXRzL2ljb25zL2tldHRsZS5zdmdcIixcblx0XCJhc3NldHMvaWNvbnMvbW91bnRhaW4uc3ZnXCIsXG5cdFwiYXNzZXRzL2ljb25zL3NvdW5kLnN2Z1wiLFxuXHRcImFzc2V0cy9pY29ucy90ZWFwb3Quc3ZnXCIsXG5cdFwiYXNzZXRzL2ljb25zL3RlbXBlcmF0dXJlLnN2Z1wiLFxuXHRcImFzc2V0cy9pY29ucy90ZW1wcy5zdmdcIixcblx0XCJhc3NldHMvaWNvbnMvemhvbmcuc3ZnXCIsXG5cdFwiYXNzZXRzL2ljb25zL+WGrOWtoy5zdmdcIixcblx0XCJhc3NldHMvaWNvbnMv5aSP5a2jLnN2Z1wiLFxuXHRcImFzc2V0cy9pY29ucy/mmKXlraMuc3ZnXCIsXG5cdFwiYXNzZXRzL2ljb25zL+eni+Wtoy5zdmdcIixcblx0XCJhc3NldHMvbG9nby5qcGdcIixcblx0XCJhc3NldHMvbWVkaWEvY29tcGFnbmllLWNvbG9uaWFsZS5qcGdcIixcblx0XCJhc3NldHMvbWVkaWEvdHlwZS1kZS10aGUubW1cIixcblx0XCJhc3NldHMvbWVkaWEvdHlwZXMtZGUtdGhlLnN2Z1wiLFxuXHRcImFzc2V0cy90aGVzL+S/oemYs+avm+Wwli5qcGdcIixcblx0XCJhc3NldHMvdGhlcy/lha3loKHojLYuanBnXCIsXG5cdFwiYXNzZXRzL3RoZXMv5YWt5aCh6buR6Iy2LmpwZ1wiLFxuXHRcImFzc2V0cy90aGVzL+WFreWuieeTnOeJhy5qcGdcIixcblx0XCJhc3NldHMvdGhlcy/lh43poILng4/pvo0uanBnXCIsXG5cdFwiYXNzZXRzL3RoZXMv5YeN6aCC54OP6b6NLmpwZ35cIixcblx0XCJhc3NldHMvdGhlcy/lnabmtIsuanBnXCIsXG5cdFwiYXNzZXRzL3RoZXMv5Z2m5rSLLmpwZ35cIixcblx0XCJhc3NldHMvdGhlcy/lo73nnIkuanBnXCIsXG5cdFwiYXNzZXRzL3RoZXMv5aO955yJLmpwZ35cIixcblx0XCJhc3NldHMvdGhlcy/lpKfntIXooo0uanBnXCIsXG5cdFwiYXNzZXRzL3RoZXMv5aSq5bmz54y06a2BLmpwZ1wiLFxuXHRcImFzc2V0cy90aGVzL+Wuiea6qumQteingOmfsy5qcGdcIixcblx0XCJhc3NldHMvdGhlcy/mnIjlhYnnmb0uanBnXCIsXG5cdFwiYXNzZXRzL3RoZXMv5pyo5p+16ZC16KeA6Z+zLmpwZ1wiLFxuXHRcImFzc2V0cy90aGVzL+acrOWxseiMti5qcGdcIixcblx0XCJhc3NldHMvdGhlcy/mnbHmlrnnvo7kurouanBnXCIsXG5cdFwiYXNzZXRzL3RoZXMv5q2j5bGx5bCP56iuLmpwZ1wiLFxuXHRcImFzc2V0cy90aGVzL+atpuWkt+awtOS7mS5qcGdcIixcblx0XCJhc3NldHMvdGhlcy/mr5von7nojLYuanBnXCIsXG5cdFwiYXNzZXRzL3RoZXMv5rqI5bGx5q+b5bCWLmpwZ1wiLFxuXHRcImFzc2V0cy90aGVzL+a6iOWxseavm+Wwli5qcGd+XCIsXG5cdFwiYXNzZXRzL3RoZXMv5ruH57SFLmpwZ1wiLFxuXHRcImFzc2V0cy90aGVzL+ePoOiMti5qcGdcIixcblx0XCJhc3NldHMvdGhlcy/nmb3mr6vpioDph50uanBnXCIsXG5cdFwiYXNzZXRzL3RoZXMv55m954mh5Li5LmpwZ1wiLFxuXHRcImFzc2V0cy90aGVzL+eip+ieuuaYpS5qcGdcIixcblx0XCJhc3NldHMvdGhlcy/npYHploDntIXojLYuanBnXCIsXG5cdFwiYXNzZXRzL3RoZXMv6IKJ5qGCLmpwZ1wiLFxuXHRcImFzc2V0cy90aGVzL+iSmemggum7g+iKvS5qcGdcIixcblx0XCJhc3NldHMvdGhlcy/okpnpoILpu4Poir0uanBnflwiLFxuXHRcImFzc2V0cy90aGVzL+mHkemnv+eciS5qcGdcIixcblx0XCJhc3NldHMvdGhlcy/pm7LljZfnmb3ojLbno5ouanBnXCIsXG5cdFwiYXNzZXRzL3RoZXMv6ZyN5bGx6buD5aSn6Iy2LmpwZ1wiLFxuXHRcImFzc2V0cy90aGVzL+mcjeWxsem7g+iKvS5qcGdcIixcblx0XCJhc3NldHMvdGhlcy/pnZLno5rojLYuanBnXCIsXG5cdFwiYXNzZXRzL3RoZXMv6aCC6LC35aSn5pa5LmpwZ1wiLFxuXHRcImFzc2V0cy90aGVzL+mzs+WHsOWWruWPoi5qcGdcIixcblx0XCJhc3NldHMvdGhlcy/pu4Pph5HmoYIuanBnXCIsXG5cdFwiYXNzZXRzL3RoZXMv6buE5bGx5q+b5bOwLmpwZ1wiLFxuXHRcImFzc2V0cy90aGVzL+m+jeS6leiMti5qcGdcIixcblx0XCJtYW5pZmVzdC5qc29uXCJcbl07XG5leHBvcnQgeyBmaWxlcyBhcyBhc3NldHMgfTsgLy8gbGVnYWN5XG5cbmV4cG9ydCBjb25zdCBzaGVsbCA9IFtcblx0XCJjbGllbnQvY2xpZW50LjI3ZDVjMzYwLmpzXCIsXG5cdFwiY2xpZW50L2luZGV4LmY5MmY1Y2UzLmpzXCIsXG5cdFwiY2xpZW50L0ljb25UZWFUeXBlLjRmZDk0ZDRmLmpzXCIsXG5cdFwiY2xpZW50L2xpc3RlLWRlcy10aGVzLVt0eXBlXS5hNTFiYjk1Ny5qc1wiLFxuXHRcImNsaWVudC9ub3VzLWNvbnRhY3Rlci5jNzcyZGNmYi5qc1wiLFxuXHRcImNsaWVudC9pbmRleC42ZTZjNTcxNy5qc1wiLFxuXHRcImNsaWVudC9bc2x1Z10uZDlmY2Q4MmQuanNcIixcblx0XCJjbGllbnQvZmljaGUtW2lkZW9ncmFtXS5mNDI4ZjJjMC5qc1wiLFxuXHRcImNsaWVudC90ZXJtZXMuYTc0ZGRiZDkuanNcIixcblx0XCJjbGllbnQvc2FwcGVyLWRldi1jbGllbnQuODllMzRiYWUuanNcIixcblx0XCJjbGllbnQvY2xpZW50LjlhYjJkNjZkLmpzXCJcbl07XG5cbmV4cG9ydCBjb25zdCByb3V0ZXMgPSBbXG5cdHsgcGF0dGVybjogL15cXC8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvbGlzdGUtZGVzLXRoZXMtKFteXFwvXSs/KVxcLz8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvbm91cy1jb250YWN0ZXJcXC8/JC8gfSxcblx0eyBwYXR0ZXJuOiAvXlxcL2RvY3VtZW50YXRpb25cXC8/JC8gfSxcblx0eyBwYXR0ZXJuOiAvXlxcL2RvY3VtZW50YXRpb25cXC8oW15cXC9dKz8pXFwvPyQvIH0sXG5cdHsgcGF0dGVybjogL15cXC9maWNoZS0oW15cXC9dKz8pXFwvPyQvIH0sXG5cdHsgcGF0dGVybjogL15cXC90ZXJtZXNcXC8/JC8gfVxuXTsiLCJpbXBvcnQgeyB0aW1lc3RhbXAsIGZpbGVzLCBzaGVsbCwgcm91dGVzIH0gZnJvbSAnQHNhcHBlci9zZXJ2aWNlLXdvcmtlcic7XG5cbmNvbnN0IEFTU0VUUyA9IGBjYWNoZSR7dGltZXN0YW1wfWA7XG5cbi8vIGBzaGVsbGAgaXMgYW4gYXJyYXkgb2YgYWxsIHRoZSBmaWxlcyBnZW5lcmF0ZWQgYnkgdGhlIGJ1bmRsZXIsXG4vLyBgZmlsZXNgIGlzIGFuIGFycmF5IG9mIGV2ZXJ5dGhpbmcgaW4gdGhlIGBzdGF0aWNgIGRpcmVjdG9yeVxuY29uc3QgdG9fY2FjaGUgPSBzaGVsbC5jb25jYXQoZmlsZXMpO1xuY29uc3QgY2FjaGVkID0gbmV3IFNldCh0b19jYWNoZSk7XG5cbnNlbGYuYWRkRXZlbnRMaXN0ZW5lcignaW5zdGFsbCcsIGV2ZW50ID0+IHtcblx0ZXZlbnQud2FpdFVudGlsKFxuXHRcdGNhY2hlc1xuXHRcdFx0Lm9wZW4oQVNTRVRTKVxuXHRcdFx0LnRoZW4oY2FjaGUgPT4gY2FjaGUuYWRkQWxsKHRvX2NhY2hlKSlcblx0XHRcdC50aGVuKCgpID0+IHtcblx0XHRcdFx0c2VsZi5za2lwV2FpdGluZygpO1xuXHRcdFx0fSlcblx0KTtcbn0pO1xuXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ2FjdGl2YXRlJywgZXZlbnQgPT4ge1xuXHRldmVudC53YWl0VW50aWwoXG5cdFx0Y2FjaGVzLmtleXMoKS50aGVuKGFzeW5jIGtleXMgPT4ge1xuXHRcdFx0Ly8gZGVsZXRlIG9sZCBjYWNoZXNcblx0XHRcdGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcblx0XHRcdFx0aWYgKGtleSAhPT0gQVNTRVRTKSBhd2FpdCBjYWNoZXMuZGVsZXRlKGtleSk7XG5cdFx0XHR9XG5cblx0XHRcdHNlbGYuY2xpZW50cy5jbGFpbSgpO1xuXHRcdH0pXG5cdCk7XG59KTtcblxuc2VsZi5hZGRFdmVudExpc3RlbmVyKCdmZXRjaCcsIGV2ZW50ID0+IHtcblx0aWYgKGV2ZW50LnJlcXVlc3QubWV0aG9kICE9PSAnR0VUJyB8fCBldmVudC5yZXF1ZXN0LmhlYWRlcnMuaGFzKCdyYW5nZScpKSByZXR1cm47XG5cblx0Y29uc3QgdXJsID0gbmV3IFVSTChldmVudC5yZXF1ZXN0LnVybCk7XG5cblx0Ly8gZG9uJ3QgdHJ5IHRvIGhhbmRsZSBlLmcuIGRhdGE6IFVSSXNcblx0aWYgKCF1cmwucHJvdG9jb2wuc3RhcnRzV2l0aCgnaHR0cCcpKSByZXR1cm47XG5cblx0Ly8gaWdub3JlIGRldiBzZXJ2ZXIgcmVxdWVzdHNcblx0aWYgKHVybC5ob3N0bmFtZSA9PT0gc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSAmJiB1cmwucG9ydCAhPT0gc2VsZi5sb2NhdGlvbi5wb3J0KSByZXR1cm47XG5cblx0Ly8gYWx3YXlzIHNlcnZlIHN0YXRpYyBmaWxlcyBhbmQgYnVuZGxlci1nZW5lcmF0ZWQgYXNzZXRzIGZyb20gY2FjaGVcblx0aWYgKHVybC5ob3N0ID09PSBzZWxmLmxvY2F0aW9uLmhvc3QgJiYgY2FjaGVkLmhhcyh1cmwucGF0aG5hbWUpKSB7XG5cdFx0ZXZlbnQucmVzcG9uZFdpdGgoY2FjaGVzLm1hdGNoKGV2ZW50LnJlcXVlc3QpKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBmb3IgcGFnZXMsIHlvdSBtaWdodCB3YW50IHRvIHNlcnZlIGEgc2hlbGwgYHNlcnZpY2Utd29ya2VyLWluZGV4Lmh0bWxgIGZpbGUsXG5cdC8vIHdoaWNoIFNhcHBlciBoYXMgZ2VuZXJhdGVkIGZvciB5b3UuIEl0J3Mgbm90IHJpZ2h0IGZvciBldmVyeVxuXHQvLyBhcHAsIGJ1dCBpZiBpdCdzIHJpZ2h0IGZvciB5b3VycyB0aGVuIHVuY29tbWVudCB0aGlzIHNlY3Rpb25cblx0Lypcblx0aWYgKHVybC5vcmlnaW4gPT09IHNlbGYub3JpZ2luICYmIHJvdXRlcy5maW5kKHJvdXRlID0+IHJvdXRlLnBhdHRlcm4udGVzdCh1cmwucGF0aG5hbWUpKSkge1xuXHRcdGV2ZW50LnJlc3BvbmRXaXRoKGNhY2hlcy5tYXRjaCgnL3NlcnZpY2Utd29ya2VyLWluZGV4Lmh0bWwnKSk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdCovXG5cblx0aWYgKGV2ZW50LnJlcXVlc3QuY2FjaGUgPT09ICdvbmx5LWlmLWNhY2hlZCcpIHJldHVybjtcblxuXHQvLyBmb3IgZXZlcnl0aGluZyBlbHNlLCB0cnkgdGhlIG5ldHdvcmsgZmlyc3QsIGZhbGxpbmcgYmFjayB0b1xuXHQvLyBjYWNoZSBpZiB0aGUgdXNlciBpcyBvZmZsaW5lLiAoSWYgdGhlIHBhZ2VzIG5ldmVyIGNoYW5nZSwgeW91XG5cdC8vIG1pZ2h0IHByZWZlciBhIGNhY2hlLWZpcnN0IGFwcHJvYWNoIHRvIGEgbmV0d29yay1maXJzdCBvbmUuKVxuXHRldmVudC5yZXNwb25kV2l0aChcblx0XHRjYWNoZXNcblx0XHRcdC5vcGVuKGBvZmZsaW5lJHt0aW1lc3RhbXB9YClcblx0XHRcdC50aGVuKGFzeW5jIGNhY2hlID0+IHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGV2ZW50LnJlcXVlc3QpO1xuXHRcdFx0XHRcdGNhY2hlLnB1dChldmVudC5yZXF1ZXN0LCByZXNwb25zZS5jbG9uZSgpKTtcblx0XHRcdFx0XHRyZXR1cm4gcmVzcG9uc2U7XG5cdFx0XHRcdH0gY2F0Y2goZXJyKSB7XG5cdFx0XHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBjYWNoZS5tYXRjaChldmVudC5yZXF1ZXN0KTtcblx0XHRcdFx0XHRpZiAocmVzcG9uc2UpIHJldHVybiByZXNwb25zZTtcblxuXHRcdFx0XHRcdHRocm93IGVycjtcblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0KTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztDQUFBO0NBQ08sTUFBTSxTQUFTLEdBQUcsYUFBYSxDQUFDO0FBQ3ZDO0NBQ08sTUFBTSxLQUFLLEdBQUc7Q0FDckIsQ0FBQywyQkFBMkI7Q0FDNUIsQ0FBQyxPQUFPO0NBQ1IsQ0FBQyxzQkFBc0I7Q0FDdkIsQ0FBQyxxQkFBcUI7Q0FDdEIsQ0FBQyx3QkFBd0I7Q0FDekIsQ0FBQywwQkFBMEI7Q0FDM0IsQ0FBQyx1QkFBdUI7Q0FDeEIsQ0FBQyx3QkFBd0I7Q0FDekIsQ0FBQyx1QkFBdUI7Q0FDeEIsQ0FBQyx3QkFBd0I7Q0FDekIsQ0FBQyx1QkFBdUI7Q0FDeEIsQ0FBQyxxQkFBcUI7Q0FDdEIsQ0FBQyx1QkFBdUI7Q0FDeEIsQ0FBQyx1QkFBdUI7Q0FDeEIsQ0FBQyx1QkFBdUI7Q0FDeEIsQ0FBQyx1QkFBdUI7Q0FDeEIsQ0FBQyx1QkFBdUI7Q0FDeEIsQ0FBQyx1QkFBdUI7Q0FDeEIsQ0FBQyx1QkFBdUI7Q0FDeEIsQ0FBQyx1QkFBdUI7Q0FDeEIsQ0FBQyx1QkFBdUI7Q0FDeEIsQ0FBQyx1QkFBdUI7Q0FDeEIsQ0FBQyx1QkFBdUI7Q0FDeEIsQ0FBQyx1QkFBdUI7Q0FDeEIsQ0FBQyxzQkFBc0I7Q0FDdkIsQ0FBQyx1QkFBdUI7Q0FDeEIsQ0FBQyx1QkFBdUI7Q0FDeEIsQ0FBQyxxQkFBcUI7Q0FDdEIsQ0FBQyx1QkFBdUI7Q0FDeEIsQ0FBQyx1QkFBdUI7Q0FDeEIsQ0FBQyx1QkFBdUI7Q0FDeEIsQ0FBQyxzQkFBc0I7Q0FDdkIsQ0FBQyxzQkFBc0I7Q0FDdkIsQ0FBQyxxQkFBcUI7Q0FDdEIsQ0FBQyxxQkFBcUI7Q0FDdEIsQ0FBQyxxQkFBcUI7Q0FDdEIsQ0FBQyxzQkFBc0I7Q0FDdkIsQ0FBQyx1QkFBdUI7Q0FDeEIsQ0FBQyxxQkFBcUI7Q0FDdEIsQ0FBQyxxQkFBcUI7Q0FDdEIsQ0FBQyx1QkFBdUI7Q0FDeEIsQ0FBQyxxQkFBcUI7Q0FDdEIsQ0FBQyx3QkFBd0I7Q0FDekIsQ0FBQyx1QkFBdUI7Q0FDeEIsQ0FBQyx5QkFBeUI7Q0FDMUIsQ0FBQyx1QkFBdUI7Q0FDeEIsQ0FBQyx3QkFBd0I7Q0FDekIsQ0FBQywyQkFBMkI7Q0FDNUIsQ0FBQyx1QkFBdUI7Q0FDeEIsQ0FBQyx3QkFBd0I7Q0FDekIsQ0FBQyx1QkFBdUI7Q0FDeEIsQ0FBQyx3QkFBd0I7Q0FDekIsQ0FBQyx1QkFBdUI7Q0FDeEIsQ0FBQyxzQkFBc0I7Q0FDdkIsQ0FBQyxxQkFBcUI7Q0FDdEIsQ0FBQyx3QkFBd0I7Q0FDekIsQ0FBQyxzQkFBc0I7Q0FDdkIsQ0FBQyxxQkFBcUI7Q0FDdEIsQ0FBQyx3QkFBd0I7Q0FDekIsQ0FBQyxxQkFBcUI7Q0FDdEIsQ0FBQyxzQkFBc0I7Q0FDdkIsQ0FBQyx1QkFBdUI7Q0FDeEIsQ0FBQyxxQkFBcUI7Q0FDdEIsQ0FBQyx1QkFBdUI7Q0FDeEIsQ0FBQyx1QkFBdUI7Q0FDeEIsQ0FBQyxzQkFBc0I7Q0FDdkIsQ0FBQyx1QkFBdUI7Q0FDeEIsQ0FBQyx1QkFBdUI7Q0FDeEIsQ0FBQyx5QkFBeUI7Q0FDMUIsQ0FBQyxxQkFBcUI7Q0FDdEIsQ0FBQyxzQkFBc0I7Q0FDdkIsQ0FBQyx1QkFBdUI7Q0FDeEIsQ0FBQyx1QkFBdUI7Q0FDeEIsQ0FBQyxxQkFBcUI7Q0FDdEIsQ0FBQyxzQkFBc0I7Q0FDdkIsQ0FBQyx1QkFBdUI7Q0FDeEIsQ0FBQyxzQkFBc0I7Q0FDdkIsQ0FBQyx1QkFBdUI7Q0FDeEIsQ0FBQyxzQkFBc0I7Q0FDdkIsQ0FBQyx1QkFBdUI7Q0FDeEIsQ0FBQyxzQkFBc0I7Q0FDdkIsQ0FBQyxxQkFBcUI7Q0FDdEIsQ0FBQyx5QkFBeUI7Q0FDMUIsQ0FBQyxzQkFBc0I7Q0FDdkIsQ0FBQyxzQkFBc0I7Q0FDdkIsQ0FBQyx1QkFBdUI7Q0FDeEIsQ0FBQyx3QkFBd0I7Q0FDekIsQ0FBQyx3QkFBd0I7Q0FDekIsQ0FBQyxxQkFBcUI7Q0FDdEIsQ0FBQyxzQkFBc0I7Q0FDdkIsQ0FBQyxzQkFBc0I7Q0FDdkIsQ0FBQyxxQkFBcUI7Q0FDdEIsQ0FBQyxzQkFBc0I7Q0FDdkIsQ0FBQyxxQkFBcUI7Q0FDdEIsQ0FBQyxxQkFBcUI7Q0FDdEIsQ0FBQyxxQkFBcUI7Q0FDdEIsQ0FBQyxxQkFBcUI7Q0FDdEIsQ0FBQyx1QkFBdUI7Q0FDeEIsQ0FBQyx1QkFBdUI7Q0FDeEIsQ0FBQyx1QkFBdUI7Q0FDeEIsQ0FBQyxxQkFBcUI7Q0FDdEIsQ0FBQyx1QkFBdUI7Q0FDeEIsQ0FBQyx1QkFBdUI7Q0FDeEIsQ0FBQyx1QkFBdUI7Q0FDeEIsQ0FBQyx1QkFBdUI7Q0FDeEIsQ0FBQyx1QkFBdUI7Q0FDeEIsQ0FBQyx1QkFBdUI7Q0FDeEIsQ0FBQyxxQkFBcUI7Q0FDdEIsQ0FBQyxzQkFBc0I7Q0FDdkIsQ0FBQyxzQkFBc0I7Q0FDdkIsQ0FBQyx1QkFBdUI7Q0FDeEIsQ0FBQyx3QkFBd0I7Q0FDekIsQ0FBQyx3QkFBd0I7Q0FDekIsQ0FBQywwQkFBMEI7Q0FDM0IsQ0FBQyx3QkFBd0I7Q0FDekIsQ0FBQyx3QkFBd0I7Q0FDekIsQ0FBQyx3QkFBd0I7Q0FDekIsQ0FBQyx1QkFBdUI7Q0FDeEIsQ0FBQyx1QkFBdUI7Q0FDeEIsQ0FBQyx1QkFBdUI7Q0FDeEIsQ0FBQyxzQkFBc0I7Q0FDdkIsQ0FBQyxxQkFBcUI7Q0FDdEIsQ0FBQyxzQkFBc0I7Q0FDdkIsQ0FBQyx1QkFBdUI7Q0FDeEIsQ0FBQyx1QkFBdUI7Q0FDeEIsQ0FBQyxzQkFBc0I7Q0FDdkIsQ0FBQyxzQkFBc0I7Q0FDdkIsQ0FBQyxxQkFBcUI7Q0FDdEIsQ0FBQyxzQkFBc0I7Q0FDdkIsQ0FBQyxxQkFBcUI7Q0FDdEIsQ0FBQyxzQkFBc0I7Q0FDdkIsQ0FBQyx1QkFBdUI7Q0FDeEIsQ0FBQyxxQkFBcUI7Q0FDdEIsQ0FBQyxzQkFBc0I7Q0FDdkIsQ0FBQyx5QkFBeUI7Q0FDMUIsQ0FBQyxvQkFBb0I7Q0FDckIsQ0FBQyxvQ0FBb0M7Q0FDckMsQ0FBQyxtQkFBbUI7Q0FDcEIsQ0FBQyx5QkFBeUI7Q0FDMUIsQ0FBQyxvQkFBb0I7Q0FDckIsQ0FBQyx5QkFBeUI7Q0FDMUIsQ0FBQyx5QkFBeUI7Q0FDMUIsQ0FBQyx5QkFBeUI7Q0FDMUIsQ0FBQywyQkFBMkI7Q0FDNUIsQ0FBQyx3QkFBd0I7Q0FDekIsQ0FBQyx5QkFBeUI7Q0FDMUIsQ0FBQyw4QkFBOEI7Q0FDL0IsQ0FBQyx3QkFBd0I7Q0FDekIsQ0FBQyx3QkFBd0I7Q0FDekIsQ0FBQyxxQkFBcUI7Q0FDdEIsQ0FBQyxxQkFBcUI7Q0FDdEIsQ0FBQyxxQkFBcUI7Q0FDdEIsQ0FBQyxxQkFBcUI7Q0FDdEIsQ0FBQyxpQkFBaUI7Q0FDbEIsQ0FBQyxzQ0FBc0M7Q0FDdkMsQ0FBQyw2QkFBNkI7Q0FDOUIsQ0FBQywrQkFBK0I7Q0FDaEMsQ0FBQyxzQkFBc0I7Q0FDdkIsQ0FBQyxxQkFBcUI7Q0FDdEIsQ0FBQyxzQkFBc0I7Q0FDdkIsQ0FBQyxzQkFBc0I7Q0FDdkIsQ0FBQyxzQkFBc0I7Q0FDdkIsQ0FBQyx1QkFBdUI7Q0FDeEIsQ0FBQyxvQkFBb0I7Q0FDckIsQ0FBQyxxQkFBcUI7Q0FDdEIsQ0FBQyxvQkFBb0I7Q0FDckIsQ0FBQyxxQkFBcUI7Q0FDdEIsQ0FBQyxxQkFBcUI7Q0FDdEIsQ0FBQyxzQkFBc0I7Q0FDdkIsQ0FBQyx1QkFBdUI7Q0FDeEIsQ0FBQyxxQkFBcUI7Q0FDdEIsQ0FBQyx1QkFBdUI7Q0FDeEIsQ0FBQyxxQkFBcUI7Q0FDdEIsQ0FBQyxzQkFBc0I7Q0FDdkIsQ0FBQyxzQkFBc0I7Q0FDdkIsQ0FBQyxzQkFBc0I7Q0FDdkIsQ0FBQyxxQkFBcUI7Q0FDdEIsQ0FBQyxzQkFBc0I7Q0FDdkIsQ0FBQyx1QkFBdUI7Q0FDeEIsQ0FBQyxvQkFBb0I7Q0FDckIsQ0FBQyxvQkFBb0I7Q0FDckIsQ0FBQyxzQkFBc0I7Q0FDdkIsQ0FBQyxxQkFBcUI7Q0FDdEIsQ0FBQyxxQkFBcUI7Q0FDdEIsQ0FBQyxzQkFBc0I7Q0FDdkIsQ0FBQyxvQkFBb0I7Q0FDckIsQ0FBQyxzQkFBc0I7Q0FDdkIsQ0FBQyx1QkFBdUI7Q0FDeEIsQ0FBQyxxQkFBcUI7Q0FDdEIsQ0FBQyx1QkFBdUI7Q0FDeEIsQ0FBQyx1QkFBdUI7Q0FDeEIsQ0FBQyxzQkFBc0I7Q0FDdkIsQ0FBQyxxQkFBcUI7Q0FDdEIsQ0FBQyxzQkFBc0I7Q0FDdkIsQ0FBQyxzQkFBc0I7Q0FDdkIsQ0FBQyxxQkFBcUI7Q0FDdEIs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
