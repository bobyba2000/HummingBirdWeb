'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "3d58b0292070cc17c5bf6e99ee8345e0",
"index.html": "d515a663380e4197416ef0d96a0ac3df",
"/": "d515a663380e4197416ef0d96a0ac3df",
"main.dart.js": "4df595fb694a2257bd3f4c5d115bd57f",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "1990eba3b85df34516626dfb539c14c8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "8cf6d1b53f41ff0c68cd2407933cc99f",
"assets/AssetManifest.json": "b4468d79218594b16e6895fe72449c57",
"assets/NOTICES": "4041bf9c4ad81f6901205fac25940ddc",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "d76a341945be193333af471c44055c1c",
"assets/fonts/MaterialIcons-Regular.otf": "d4563b32f3a5d413ff5fa8e66e2e5024",
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
"assets/assets/images/splash1.png": "a8d6aab267a825e88e6ed1dd723a0c1c",
"assets/assets/images/ic_facebook_logo.png": "f8bd12f2f93367596fa33f49f7e95fa3",
"assets/assets/images/splash.png": "6e75ade8a72b858966648739505a72cf",
"assets/assets/images/logo.png": "f71ad5be0d80d19db8274fa03d146eb5",
"assets/assets/images/work_step.png": "24451bfd936bce23ee6d1c5ccab28f5b",
"assets/assets/images/ic_account.png": "cdbdd4d501f3f2ecbf0bbc500250b9c9",
"assets/assets/images/ic_google_play.png": "68f0d4bf07f26fe081125f31dd0da153",
"assets/assets/images/ic_email.png": "8d140277384c72af61991d0179f597c4",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
