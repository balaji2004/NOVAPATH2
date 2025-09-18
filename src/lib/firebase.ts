
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  "projectId": "studio-6797241373-b205c",
  "appId": "1:156607849387:web:7bc126b76e24f8c9d9a8ee",
  "storageBucket": "studio-6797241373-b205c.firebasestorage.app",
  "apiKey": "AIzaSyD2WKbvNCduCISB5Yjh3TO0qEVBg5326s0",
  "authDomain": "studio-6797241373-b205c.firebaseapp.com",
  "messagingSenderId": "156607849387"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
