import firebase from 'firebase/app';
import 'firebase/firebase-firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBV8sHfMcfdmx4LtkeMMwzzUsDhseFsRWc",
  authDomain: "atividade06pidm.firebaseapp.com",
  projectId: "atividade06pidm",
  storageBucket: "atividade06pidm.appspot.com",
  messagingSenderId: "123901617769",
  appId: "1:123901617769:web:1a3579a8d435bec6f364f8",
  databaseURL: 'https://atividade06pidm-default-rtdb.firebaseio.com/',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const firestore = firebase.firestore();

export { firestore };
