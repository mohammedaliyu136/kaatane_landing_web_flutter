'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/assets\AssetManifest.json": "8c3a4178bea0a2eff77c796dc33c440f",
"/assets\assets\fonts\GreatVibes-Regular.ttf": "c1c92d0c804d46cb62814e7389725082",
"/assets\assets\fonts\Poppins-Bold.ttf": "c23534acbeddbaadfd0ab2d2bbfdfc84",
"/assets\assets\fonts\Poppins-ExtraBold.ttf": "6b78c7ec468eb0e13c6c5c4c39203986",
"/assets\assets\images\food_icon.png": "eae3e42f0b90cc37271a457a7192e82d",
"/assets\assets\images\kaatane_white.png": "29b7b372bd2a605751fd6cdfde8921f2",
"/assets\assets\images\resto-service3.jpg": "dc80187f4813c3918d639769b7a4a129",
"/assets\assets\images\resto-service4.jpg": "f679c8872c89f94c54aa3cc1870691c2",
"/assets\assets\images\resto-service5.jpg": "36f647f2756cd2fe8f952004a20a3784",
"/assets\FontManifest.json": "4dc2235510ab94605b2794fdaff1623b",
"/assets\fonts\MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets\LICENSE": "2b6c785b1fdd6eaf7711019e7a80fcf0",
"/assets\packages\cupertino_icons\assets\CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/icons\Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons\Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/index.html": "4c8e586a26237fefa6e9e04e6971e604",
"/main.dart.js": "b92ce35bc1d45204fbc41f8e1d50a658",
"/manifest.json": "6ffdaa19339f93a18581471e43f5e4fa"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request, {
          credentials: 'include'
        });
      })
  );
});
