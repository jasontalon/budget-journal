import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/analytics'
import 'firebase/auth'

var firebaseConfig = {
  apiKey: 'AIzaSyAPJ1F6OW9TaDB_dATEB6agc01cpVRPlvs',
  authDomain: 'my-budget-journal.firebaseapp.com',
  projectId: 'my-budget-journal',
  storageBucket: 'my-budget-journal.appspot.com',
  messagingSenderId: '311355260206',
  appId: '1:311355260206:web:885145f2906c874902cebf',
  measurementId: 'G-WDBRJVQ019',
}

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}
