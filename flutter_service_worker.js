'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "3d58b0292070cc17c5bf6e99ee8345e0",
"index.html": "9f4f33058fc845a28c9e52a3cd05cf78",
"/": "9f4f33058fc845a28c9e52a3cd05cf78",
"main.dart.js": "84f6a1827fd99d147c7ef06b1d95d2c3",
".well-known/assetlinks.json": "76b1b4bc926b3b9d8baca33477bac872",
"404.html": "453ee8327dc629b7c37499d585a36530",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "1990eba3b85df34516626dfb539c14c8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "8cf6d1b53f41ff0c68cd2407933cc99f",
"assets/AssetManifest.json": "7407e29c20c1d506dd92d7ec7970a137",
"assets/NOTICES": "3cb0ff4e2c34134334225ef9b28b3704",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "31bfb15446347d1ef2a420a031162da5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "1613241d5f6296e275421b16dc5b80f7",
"assets/fonts/MaterialIcons-Regular.otf": "049a03f22b6104f874505dbbc690eab5",
"assets/assets/svg/link_chain.svg": "f9769049a30ec98e98f0656a2e08eb50",
"assets/assets/svg/ic_paypal.svg": "a07cf6384620d25ccc2fccf8fef7d2e4",
"assets/assets/svg/ic_website.svg": "b6d7facfb5700334efafbb3feeb79cd4",
"assets/assets/svg/ic_number.svg": "b11bf7e9c769833d46e8f996544ea372",
"assets/assets/svg/ic_menu.svg": "c2ae9f25b30e6124cc54f9da37ecc070",
"assets/assets/images/ic_wechat.png": "6acf6de3bc793609cc2c48ef4dd92461",
"assets/assets/images/default_avatar.png": "c0806327c3093eaab46cc76f0482e170",
"assets/assets/images/ic_google.png": "990108508b95f3e84ecdfe1efce3dd46",
"assets/assets/images/address_step.png": "1512a1ae8f244c7c6126b35edb593dfa",
"assets/assets/images/ic_youtube.png": "163ae3fe6e18bd1a8d86261c2dec7943",
"assets/assets/images/ic_thread.png": "fd43bdf140aaab341dde0831b4445e13",
"assets/assets/images/ic_nfc.png": "af886a24f444562ad23bfc7faf10d68b",
"assets/assets/images/ic_sharing.png": "ed20bf8546480363cfca3444aa7a059c",
"assets/assets/images/ic_linkedin.png": "eb144bf32662fd8e2b8c3945d2987d63",
"assets/assets/images/ic_connection.png": "73d09a698e667336dd90a46458c19564",
"assets/assets/images/ic_location.png": "212ec18eb5a07589db8fc0a1f777117a",
"assets/assets/images/ic_versatility.png": "375baf26f2564aad412e331a30e4708b",
"assets/assets/images/ic_apple.png": "cb0a38773d4143acfb8b9db5b0bffb7b",
"assets/assets/images/default_background.png": "99b11ebee50bbadaec5140366bd9c8bc",
"assets/assets/images/ic_whatsapp.png": "3fc88e574d7334a81485606b3d30e3fd",
"assets/assets/images/ic_contacts.png": "1ba752c54e5b8ca535facc2f8c7cd637",
"assets/assets/images/ic_link.png": "7423c342acc170c1cced5e6ff8c7f1b8",
"assets/assets/images/ic_profile.png": "61f09f24809117831081c013de62165e",
"assets/assets/images/ic_facebook.png": "16fe40ef9cee5f4aac7e05d28e7e200a",
"assets/assets/images/ic_personal.png": "d9b16a8c849a8b52b042d5e5e6b100b0",
"assets/assets/images/ic_twitter.png": "be2a2d46ba8705e89517c6135de595fe",
"assets/assets/images/ic_instagram.png": "6ee98bf8411cd774299c46b3f3749bd1",
"assets/assets/images/ic_logout.png": "9714b38a6f4e776d85e1986c2cbc3317",
"assets/assets/images/splash1_mobile.jpeg": "4640c9b237e8c0974cfa5b2f4eaf6bbb",
"assets/assets/images/splash1.png": "a8d6aab267a825e88e6ed1dd723a0c1c",
"assets/assets/images/ic_facebook_logo.png": "f8bd12f2f93367596fa33f49f7e95fa3",
"assets/assets/images/splash.png": "6e75ade8a72b858966648739505a72cf",
"assets/assets/images/logo.png": "f71ad5be0d80d19db8274fa03d146eb5",
"assets/assets/images/work_step.png": "24451bfd936bce23ee6d1c5ccab28f5b",
"assets/assets/images/ic_account.png": "cdbdd4d501f3f2ecbf0bbc500250b9c9",
"assets/assets/images/ic_google_play.png": "68f0d4bf07f26fe081125f31dd0da153",
"assets/assets/images/ic_email.png": "8d140277384c72af61991d0179f597c4",
"assets/assets/images/ic_qr_logo.png": "11b5bb5b2b0e0f7e0f540702d3093782",
"assets/assets/resources/country.json": "a85070d32d0b539854b4a327c04ad750",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
