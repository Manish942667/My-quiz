/* --- START FIREBASE MESSAGING --- */
// Import the background messaging scripts
importScripts('https://www.gstatic.com/firebasejs/9.22.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.1/firebase-messaging-compat.js');

// Initialize Firebase inside the Service Worker
firebase.initializeApp({
  apiKey: "AIzaSyD45MzRXxn6PTn5yszQi_xlc0kO-FukHoI",
  authDomain: "rx-aspirant.firebaseapp.com",
  projectId: "rx-aspirant",
  storageBucket: "rx-aspirant.firebasestorage.app",
  messagingSenderId: "1007411370077",
  appId: "1:1007411370077:web:da559e45fd2a6a032b15b4"
});

const messaging = firebase.messaging();

// This listener catches the notification when the app is in the background
messaging.onBackgroundMessage((payload) => {
  console.log('Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/My-Quiz/icons/icon-192x192.png' // Update this to your icon path
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
/* --- END FIREBASE MESSAGING --- */
