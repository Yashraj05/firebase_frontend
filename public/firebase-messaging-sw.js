// /* eslint-disable no-undef */
// // Import Firebase libraries for version 9.0.0
// importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
// importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// // Initialize Firebase with your project's configuration
// firebase.initializeApp({
//     apiKey: "AIzaSyA6CfRKvv1hxAFEXZG7wVZM2vlgea_x3_0",
//     authDomain: "notification-eebdc.firebaseapp.com",
//     projectId: "notification-eebdc",
//     storageBucket: "notification-eebdc.appspot.com",
//     messagingSenderId: "374046913518",
//     appId: "1:374046913518:web:d4a3e1eb6acdcfbdff54ff",
//     measurementId: "G-XPHWG6CQ13"
// });

// // Get the Firebase Messaging instance
// const messaging = firebase.messaging();

// // Listen for incoming push notifications
// // eslint-disable-next-line no-restricted-globals
// self.addEventListener('push', (event) => {
//   // Extract notification data from the event
//   const payload = event.data.json();
//   const title = payload.notification.title;
//   const body = payload.notification.body;

//   // Define options for displaying the notification
//   const options = {
//     body: body,
//     icon: 'path-to-your-icon.png', // You can specify the path to the notification icon
//   };

//   // Show the notification using the Service Worker's registration
//   event.waitUntil(
//     // eslint-disable-next-line no-restricted-globals
//     self.registration.showNotification(title, options)
//   );
// });
