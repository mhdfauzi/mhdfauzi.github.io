importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');
 
if (workbox)
  console.log(`Workbox berhasil dimuat`);
else
  console.log(`Workbox gagal dimuat`);

workbox.precaching.precacheAndRoute([
  { url: '/', revision: '1' },
  { url: '/manifest.json', revision: '1' },
  { url: '/index.html', revision: '1' },
  { url: '/team.html', revision: '1' },
  { url: '/nav.html', revision: '1' },
  { url: '/css/materialize.min.css', revision: '1' },
  { url: '/css/style.css', revision: '1' },
  { url: '/js/materialize.min.js', revision: '1' },
  { url: '/js/sw.js', revision: '1' },
  { url: '/js/script.js', revision: '1' },
  { url: '/js/api.js', revision: '1' },
  { url: '/js/getTeam.js', revision: '1' },
  { url: '/js/getStanding.js', revision: '1' },
  { url: '/js/getSaved.js', revision: '1' },
  { url: '/js/preloader.js', revision: '1' },
  { url: '/js/save.js', revision: '1' },
  { url: '/js/idb.js', revision: '1' },
  { url: '/js/db.js', revision: '1' },
  { url: '/push.js', revision: '1' },
  { url: '/images/icons/icon-72x72.png', revision: '1' },
  { url: '/images/icons/icon-96x96.png', revision: '1' },
  { url: '/images/icons/icon-128x128.png', revision: '1' },
  { url: '/images/icons/icon-144x144.png', revision: '1' },
  { url: '/images/icons/icon-192x192.png', revision: '1' },
  { url: '/images/icons/icon-256x256.png', revision: '1' },
  { url: '/images/icons/icon-384x384.png', revision: '1' },
  { url: '/images/icons/icon-512x512.png', revision: '1' },
  { url: '/pages/home.html', revision: '1' },
  { url: '/pages/saved.html', revision: '1' },
],{
ignoreUrlParametersMatching: [/.*/]
});

workbox.routing.registerRoute(
  /\.(?:png|gif|jpg|jpeg|svg)$/,
  workbox.strategies.cacheFirst({
    cacheName: 'images',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 hari
      }),
    ],
  }),
);

workbox.routing.registerRoute(
  new RegExp('/pages/'),
  workbox.strategies.staleWhileRevalidate({
      cacheName: 'pages'
  })
);

workbox.routing.registerRoute(
  /^https:\/\/fonts\.googleapis\.com/,
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'material-icon',
  })
);

workbox.routing.registerRoute(
  /^https:\/\/api\.football\-data\.org\/v2\//,
  workbox.strategies.staleWhileRevalidate({
      cacheName: 'api.football-data'
  })
);


self.addEventListener('notificationclick', event => {
    event.notification.close();
    if (!event.action) {
      // Penguna menyentuh area notifikasi diluar action
      console.log('Notification Click.');
      return;
    }
    switch (event.action) {
      case 'yes-action':
        console.log('Pengguna memilih action yes.');
        // buka tab baru
        clients.openWindow('/#saved');
        break;
      case 'no-action':
        console.log('Pengguna memilih action no');
        break;
      default:
        console.log(`Action yang dipilih tidak dikenal: '${event.action}'`);
        break;
    }
  });

self.addEventListener('push', event => {
    let body;
    if (event.data) {
      body = event.data.text();
    } else {
      body = 'Push message no payload';
    }
    let options = {
      body: body,
      icon: '/images/icons/icon-512x512.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: 1
      }
    };
    event.waitUntil(
      self.registration.showNotification('Push Notification', options)
    );
});