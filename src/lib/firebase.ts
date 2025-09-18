
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  "projectId": "novapath-fb8de",
  "appId": "1:156607849387:web:7bc126b76e24f8c9d9a8ee",
  "storageBucket": "novapath-fb8de.appspot.com",
  "apiKey": "AIzaSyD2WKbvNCduCISB5Yjh3TO0qEVBg5326s0",
  "authDomain": "novapath-fb8de.firebaseapp.com",
  "messagingSenderId": "156607849387"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
