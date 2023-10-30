import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/messaging'; // Import Firebase messaging
import 'firebase/compat/firestore'; // Import Firestore if you need it
import './App.css';
import React, { useEffect, useState } from 'react';

var config = {
  apiKey: "AIzaSyA6CfRKvv1hxAFEXZG7wVZM2vlgea_x3_0",
  authDomain: "notification-eebdc.firebaseapp.com",
  projectId: "notification-eebdc",
  storageBucket: "notification-eebdc.appspot.com",
  messagingSenderId: "374046913518",
  appId: "1:374046913518:web:d4a3e1eb6acdcfbdff54ff",
  measurementId: "G-XPHWG6CQ13"
};
firebase.initializeApp(config);

function App() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const messaging = firebase.messaging();
    messaging.onMessage((payload) => {
      console.log(payload);
      // eslint-disable-next-line no-restricted-globals
      
      // Handle the incoming message and add it to your notifications state.
      const newNotification = {
        title: payload.notification.title,
        body: payload.notification.body,
      };
      const notification = new Notification(payload.notification.title,{
        body:payload.notification.body
      })
      setNotifications((prevNotifications) => [newNotification, ...prevNotifications]);
    });
  }, [notifications]);

  return (
    <div className="App">
      <Login />
      <NotificationList notifications={notifications} />
    </div>
  );
}


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const messaging = firebase.messaging();
      const token = await messaging.getToken();
      console.log('FCM Token:', token);
  
      const response = await fetch('http://192.168.1.213:3007/employee/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, fcmToken: token }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Login successful:', data);
      } else {
        console.error('Login error:', response.statusText);
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};
const NotificationList = ({ notifications }) => {
  return (
    <div>
      <h2>Notifications:</h2>
      <ul>
        {notifications.map((notification, index) => (
          <li key={index}>
            <strong>{notification.title}</strong>: {notification.body}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default App;
