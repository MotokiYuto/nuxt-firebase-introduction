import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp(
    {
      apiKey: "AIzaSyDnGtkVa-frvtI3r7SOaFc7PKxAoANKPxA",
      authDomain: "nuxt-firebase-introduction.firebaseapp.com",
      databaseURL: "https://nuxt-firebase-introduction.firebaseio.com",
      projectId: "nuxt-firebase-introduction",
      storageBucket: "nuxt-firebase-introduction.appspot.com",
      messagingSenderId: "779950847276",
      appId: "1:779950847276:web:dbf3b5a8bc3c4d641a6889"
    }
  )
}

export default firebase