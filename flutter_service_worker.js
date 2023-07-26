'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "db74409bc339d5ec9a92c373c51c3a0d",
"assets/assets/2.0x/logo.png": "a17c17b54d55dc62f6217e633cb7ac67",
"assets/assets/3.0x/logo.png": "95593c6a7fb5ae5cb7b8c6025d39b0e1",
"assets/assets/firebase_logo.png": "bb5d30fec65686babae2e8caa53666c3",
"assets/assets/fonts/Montserrat-Bold.ttf": "a3b387c93882604792867736aecd56c8",
"assets/assets/fonts/Montserrat-Light.ttf": "2f354053d1c9c36f533ebd226698bfa5",
"assets/assets/fonts/Montserrat-Medium.ttf": "0098f804fc2d06af52650e0b8ed3390c",
"assets/assets/fonts/Raleway-Black.ttf": "3469d4a9bf3b8f9db8f3e5c69e3fce8e",
"assets/assets/fonts/Raleway-Bold.ttf": "2f99a85426a45e0c7f8707aae53af803",
"assets/assets/fonts/Raleway-Regular.ttf": "84abe14c9756256a4b91300ba3e4ec62",
"assets/assets/fonts/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/assets/fonts/RobotoCondensed-Bold.ttf": "141d6bca9dd80c70f193e15e44e196e9",
"assets/assets/fonts/RobotoCondensed-Italic.ttf": "198e3f07ee8b96ece655b7c4b4b3ce24",
"assets/assets/fonts/RobotoCondensed-Light.ttf": "a60a2f5cb89d9def151ac47b377a1f09",
"assets/assets/fonts/RobotoCondensed-Regular.ttf": "9c6aac5ea7419fbe344b1e8f6cc10dac",
"assets/assets/icons/clipboard.png": "4f6a50ecf482cc544bc8661066e22ce6",
"assets/assets/icons/Documents.svg": "51896b51d35e28711cf4bd218bde185d",
"assets/assets/icons/drop_box.svg": "3295157e194179743d6093de9f1ff254",
"assets/assets/icons/facebook.png": "1ad38366de95ab12f814501ca337ec5f",
"assets/assets/icons/folder.svg": "40a82e74e930ac73aa6ccb85d8c5a29c",
"assets/assets/icons/google.png": "3ecbe9ccf1744797097295c533223287",
"assets/assets/icons/logo.svg": "b3af0c077a73709c992d7e075b76ce33",
"assets/assets/icons/media.svg": "059dfe46bd2d92e30bf361c2f7055c3b",
"assets/assets/icons/menu_dashbord.svg": "b2cdf62e9ce9ca35f3fc72f1c1fcc7d4",
"assets/assets/icons/menu_doc.svg": "09673c2879de2db9646345011dbaa7bb",
"assets/assets/icons/menu_notification.svg": "460268d6e4bdeab56538d7020cc4b326",
"assets/assets/icons/menu_profile.svg": "fe56f998a7c1b307809ea3653a1b62f9",
"assets/assets/icons/menu_setting.svg": "d0e24d5d0956729e0e2ab09cb4327e32",
"assets/assets/icons/menu_store.svg": "2fd4ae47fd0fca084e50a600dda008cd",
"assets/assets/icons/menu_task.svg": "1a02d1c14f49a765da34487d23a3093b",
"assets/assets/icons/menu_tran.svg": "6c95fa7ae6679737dc57efd2ccbb0e57",
"assets/assets/icons/profile1.png": "dc5161dd5e36744d184e0b98e97d31ba",
"assets/assets/icons/profile2.png": "eab5c03899b76ba4e1f8e6c8c0a385ac",
"assets/assets/icons/profile3.png": "b2a053d7086b2626c22a451b18722d51",
"assets/assets/icons/profile4.png": "37bddead458898ba70555b8f621ca1ae",
"assets/assets/icons/Search.svg": "396d519c18918ed763d741f4ba90243a",
"assets/assets/icons/unknown.svg": "b2f3cdc507252d75dea079282f14614f",
"assets/assets/images/201602283.pdf": "632f7b9990e2f102657fde2fd8de492e",
"assets/assets/images/add_session.png": "feb0b5ba3801ebe2dd9f97801908baa3",
"assets/assets/images/art.jpg": "4b82af211554370813793a2809f52dd0",
"assets/assets/images/articles.png": "994deded35054bbc86da6e1420537522",
"assets/assets/images/clinic.png": "f288279a795d4090b7e6b96d8f384fa6",
"assets/assets/images/clinic_image.png": "2d91b4e9871a78d24b38692d9682ae7e",
"assets/assets/images/cn_flag.png": "0cf9f709094e9c1e2e5959f808dfae9a",
"assets/assets/images/distance.png": "f0a27878cf0b2d88657951f78d3b5d28",
"assets/assets/images/doctor.png": "4290cf5e913c176f1920ead4d1030c3a",
"assets/assets/images/doctor_person.png": "f42d94f43d878fb2c95440a5d4b7ebc9",
"assets/assets/images/emergency.png": "557481978830d843cf2a39f95a3315d8",
"assets/assets/images/facebook.png": "c1fda827ac29f1e9b1aba412bfc57198",
"assets/assets/images/firebase_logo.png": "bb5d30fec65686babae2e8caa53666c3",
"assets/assets/images/fr_flag.png": "a2c22bb3d72c0fbb631f91ccbb07495e",
"assets/assets/images/google.png": "e3e16c6832aa1ef4f072cfb5e39c0f5e",
"assets/assets/images/header.png": "7979a7c0f5769134fafa4072085daac9",
"assets/assets/images/insurance.png": "73671d930e1be4640ab0ea2b32bb6093",
"assets/assets/images/in_flag.png": "4744c096bcbac0fd4c969e21b95d5900",
"assets/assets/images/it_flag.png": "f5f9cc786fb0ba1fe1216b0eb2a2930d",
"assets/assets/images/lab.jpg": "60571365f96c51bf6b4ac15338087ed9",
"assets/assets/images/lab.png": "0a16dae18927181d39996e0aba63e78d",
"assets/assets/images/labs.png": "858b3aa5804cb2cf3cf9ebc2025b3803",
"assets/assets/images/logo.png": "7e2c9324b2ae66dc6edea6283a5d50ff",
"assets/assets/images/mask.png": "abe043d81e01ff10e2cbf94660ff7310",
"assets/assets/images/merge_from_ofoct%2520(2).jpg": "bd1e5a775847eb9002b7b285c1275ec6",
"assets/assets/images/mockup-2.png": "43ca138b1424c2cd672abe8e0fedc204",
"assets/assets/images/mockup-3.png": "22734f8af1b16dd47b4cd5c326f09203",
"assets/assets/images/mockup.png": "2ec9e0b08217f7a2383a961ce73c0e63",
"assets/assets/images/onboardingone.png": "c388b22ca230bdb4965f92cfaaef0f6d",
"assets/assets/images/onboardingthree.png": "6ffec9ca57f27614cb77d9ca9c6fd3d3",
"assets/assets/images/onboardingtwo.png": "64bdfa1f9af0e1a16041ee163b8d077e",
"assets/assets/images/othome.png": "ee21e952596481f492ab0c7b6f54e84f",
"assets/assets/images/othome1.png": "bae629cfed6c66dacec647da91f841b5",
"assets/assets/images/otlog.png": "7f6cf0a0aae07435a10d2c6c520c15ba",
"assets/assets/images/otlog2.png": "5de6dc7997666464488def0722cbfcb2",
"assets/assets/images/otmaterial.png": "419a1631c11f56810bfb4c0fa143907c",
"assets/assets/images/otplanner.png": "310d605e8ff3d0b44f604b7f1488d3e0",
"assets/assets/images/otprofile.png": "bfa7e7bd099992d64be4a5bda63bd6ab",
"assets/assets/images/otprofile1.png": "310d605e8ff3d0b44f604b7f1488d3e0",
"assets/assets/images/otreport.png": "da4f80a1f21a53ed7f05a8d125d32b78",
"assets/assets/images/ottut.png": "36441d40398fe6933882309f8b553da7",
"assets/assets/images/own_test.png": "bcebad534973f8cb599025096c2add3b",
"assets/assets/images/profile.png": "ce79cffcc862c928e0200696f5a9775f",
"assets/assets/images/profile_pic.png": "14fadd39309977174ebbf611aa064f64",
"assets/assets/images/report.jpg": "da71d6d02302f43cda4c29f660a135db",
"assets/assets/images/report.png": "d521818155e819e2bce432217b9314cb",
"assets/assets/images/slide1.png": "ddaa0e9f7f4432685c6466514a8285fa",
"assets/assets/images/slide2.png": "4babe61e473e3c6e65a502ea55df4609",
"assets/assets/images/slide3.png": "ce516719ec4889aeda9c8286e07d77e4",
"assets/assets/images/specialities.png": "a26f55238196afa60b01537bbe32edf4",
"assets/assets/images/twitter.png": "4f008a67a3ec059ca03711ffd0736cb8",
"assets/assets/images/uk_flag.png": "05d99a36905ba1938f6d578e2ff4ea2e",
"assets/assets/images/usa_flag.png": "b8c0ea3507fb672cdc7982ba3d6b2098",
"assets/assets/images/wash_hands.png": "f19f353ba4f53709791e030e5f97e996",
"assets/assets/images/welcome.png": "ac7a6677fae3e56cfa9f4e884652ef80",
"assets/assets/logo/logo.png": "2af7b2e72abedc2bce98944653429354",
"assets/assets/logo/logo.svg": "925b17733e3fc58fc1e60125e3c2fcab",
"assets/assets/logo/logo_icon.png": "aa04971f5a403dd24bcaf06f55b093c1",
"assets/assets/logo/logo_name.svg": "13525360ef71a507eb10ce4d4f408658",
"assets/assets/logo/logo_text.png": "0b78ae381bd4c66c0394fc37cea78284",
"assets/assets/logo.png": "c4a02e98f6bcb1228c948bd8287c5dcf",
"assets/assets/slides/background-1.jpeg": "f8ed4d3704b14706eb036222b7ca4045",
"assets/assets/slides/background-2.jpeg": "2a495deff8fae15f2b30f535d1576ca1",
"assets/assets/slides/background-3.jpeg": "a1789d9a53f146cb6178e9db14b5e244",
"assets/assets/slides/background.jpeg": "d9418faee4ffef09d5142d2281040011",
"assets/FontManifest.json": "c9fea85534300b8e5f2a80db26aa87f5",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "4848531c0d964b30d8a390af2eacc5dd",
"assets/packages/awesome_dialog/assets/flare/error.flr": "e3b124665e57682dab45f4ee8a16b3c9",
"assets/packages/awesome_dialog/assets/flare/info.flr": "bc654ba9a96055d7309f0922746fe7a7",
"assets/packages/awesome_dialog/assets/flare/info2.flr": "21af33cb65751b76639d98e106835cfb",
"assets/packages/awesome_dialog/assets/flare/info_without_loop.flr": "cf106e19d7dee9846bbc1ac29296a43f",
"assets/packages/awesome_dialog/assets/flare/question.flr": "1c31ec57688a19de5899338f898290f0",
"assets/packages/awesome_dialog/assets/flare/succes.flr": "ebae20460b624d738bb48269fb492edf",
"assets/packages/awesome_dialog/assets/flare/succes_without_loop.flr": "3d8b3b3552370677bf3fb55d0d56a152",
"assets/packages/awesome_dialog/assets/flare/warning.flr": "68898234dacef62093ae95ff4772509b",
"assets/packages/awesome_dialog/assets/flare/warning_without_loop.flr": "c84f528c7e7afe91a929898988012291",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/day_night_time_picker/assets/moon.png": "71137650ab728a466a50fa4fa78fb2b9",
"assets/packages/day_night_time_picker/assets/sun.png": "5fd1657bcb73ce5faafde4183b3dab22",
"assets/packages/eva_icons_flutter/lib/fonts/Eva-Icons.ttf": "a71dbd49ad4a52020638190e30ac52e0",
"assets/packages/flutter_icons_null_safety/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_icons_null_safety/fonts/Entypo.ttf": "744ce60078c17d86006dd0edabcd59a7",
"assets/packages/flutter_icons_null_safety/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_icons_null_safety/fonts/Feather.ttf": "6beba7e6834963f7f171d3bdd075c915",
"assets/packages/flutter_icons_null_safety/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_icons_null_safety/fonts/FontAwesome5_Brands.ttf": "c39278f7abfc798a241551194f55e29f",
"assets/packages/flutter_icons_null_safety/fonts/FontAwesome5_Regular.ttf": "f6c6f6c8cb7784254ad00056f6fbd74e",
"assets/packages/flutter_icons_null_safety/fonts/FontAwesome5_Solid.ttf": "b70cea0339374107969eb53e5b1f603f",
"assets/packages/flutter_icons_null_safety/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_icons_null_safety/fonts/Ionicons.ttf": "b2e0fc821c6886fb3940f85a3320003e",
"assets/packages/flutter_icons_null_safety/fonts/MaterialCommunityIcons.ttf": "3c851d60ad5ef3f2fe43ebd263490d78",
"assets/packages/flutter_icons_null_safety/fonts/MaterialIcons.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/packages/flutter_icons_null_safety/fonts/Octicons.ttf": "73b8cff012825060b308d2162f31dbb2",
"assets/packages/flutter_icons_null_safety/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_icons_null_safety/fonts/weathericons.ttf": "4618f0de2a818e7ad3fe880e0b74d04a",
"assets/packages/flutter_icons_null_safety/fonts/Zocial.ttf": "5cdf883b18a5651a29a4d1ef276d2457",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"assets/packages/timezone/data/2020a.tzf": "84285f1f81b999f1de349a723574b3e5",
"canvaskit/canvaskit.js": "62b9906717d7215a6ff4cc24efbd1b5c",
"canvaskit/canvaskit.wasm": "b179ba02b7a9f61ebc108f82c5a1ecdb",
"canvaskit/profiling/canvaskit.js": "3783918f48ef691e230156c251169480",
"canvaskit/profiling/canvaskit.wasm": "6d1b0fc1ec88c3110db88caa3393c580",
"favicon.png": "d41d8cd98f00b204e9800998ecf8427e",
"icons/Icon-192.png": "d41d8cd98f00b204e9800998ecf8427e",
"icons/Icon-512.png": "d41d8cd98f00b204e9800998ecf8427e",
"icons/Icon-maskable-192.png": "d41d8cd98f00b204e9800998ecf8427e",
"icons/Icon-maskable-512.png": "d41d8cd98f00b204e9800998ecf8427e",
"index.html": "f547bf88b6010ef96576fa14fbee68cf",
"/": "f547bf88b6010ef96576fa14fbee68cf",
"main.dart.js": "ca622c7bd320b4545e417af8a735700e",
"manifest.json": "d41d8cd98f00b204e9800998ecf8427e",
"version.json": "71147e1887f3d194e6019f2b095180fd"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
