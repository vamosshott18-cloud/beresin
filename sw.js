/* alamat lama: hapus cache lama lalu lepas service worker, supaya semua diteruskan ke beresinid.github.io */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(caches.keys().then(k => Promise.all(k.map(x => caches.delete(x)))).then(() => self.registration.unregister())));
