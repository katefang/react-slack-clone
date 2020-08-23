import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

var firebaseConfig = {
  apiKey: 'AIzaSyBG-DUhK2B7dSWZBayKjQWb6nzy7uNOwb0',
  authDomain: 'react-slack-clone-dc6f6.firebaseapp.com',
  databaseURL: 'https://react-slack-clone-dc6f6.firebaseio.com',
  projectId: 'react-slack-clone-dc6f6',
  storageBucket: 'react-slack-clone-dc6f6.appspot.com',
  messagingSenderId: '105960822617',
  appId: '1:105960822617:web:21e4f112f0f2294e0c1e48',
  measurementId: 'G-JCXNS4KBNE'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
