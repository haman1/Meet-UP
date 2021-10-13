// Import stylesheets
import './style.css';
// Firebase App (the core Firebase SDK) is always required
import { initializeApp } from 'firebase/app';

// Add the Firebase products and methods that you want to use
import { getAuth, EmailAuthProvider } from 'firebase/auth';
import {} from 'firebase/firestore';

import * as firebaseui from 'firebaseui';

// Document elements
const startRsvpButton = document.getElementById('startRsvp');
const guestbookContainer = document.getElementById('guestbook-container');

const form = document.getElementById('leave-message');
const input = document.getElementById('message');
const guestbook = document.getElementById('guestbook');
const numberAttending = document.getElementById('number-attending');
const rsvpYes = document.getElementById('rsvp-yes');
const rsvpNo = document.getElementById('rsvp-no');

let rsvpListener = null;
let guestbookListener = null;

let db, auth;

async function main() {
  // Add Firebase project configuration object here
  const firebaseConfig = {
    apiKey: "AIzaSyCMk4T4wawRQLwSiUOlzcfMFkx4l9Aorsw",
    authDomain: "fir-web-codelab-8fc1b.firebaseapp.com",
    projectId: "fir-web-codelab-8fc1b",
    storageBucket: "fir-web-codelab-8fc1b.appspot.com",
    messagingSenderId: "420257631889",
    appId: "1:420257631889:web:e2f7c6bdc5fd79b108f930"
  };

  // initializeApp(firebaseConfig);
  initializeApp(firebaseConfig);

  // FirebaseUI config
  const uiConfig = {
    credentialHelper: firebaseui.auth.CredentialHelper.NONE,
    signInOptions: [
      // Email / Password Provider.
      EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccessWithAuthResult: function(authResult, redirectUrl) {
        // Handle sign-in.
        // Return false to avoid redirect.
        return false;
      }
    }
  };

  // const ui = new firebaseui.auth.AuthUI(auth);
  const ui = new firebaseui.auth.AuthUI(auth);

  // Listen to RSVP button clicks
  startRsvpButton.addEventListener("click",
   () => {
        ui.start("#firebaseui-auth-container", uiConfig);
  });
}
main();
