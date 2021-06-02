import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCtBjplyLhx1izskG-In6dSpnVdtFeBMy4",
    authDomain: "crwn-db-63db2.firebaseapp.com",
    projectId: "crwn-db-63db2",
    storageBucket: "crwn-db-63db2.appspot.com",
    messagingSenderId: "452190775440",
    appId: "1:452190775440:web:bb5dcfce4e512f31f41015",
    measurementId: "G-SZT6JXPZSM"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;