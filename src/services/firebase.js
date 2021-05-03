import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({

        apiKey: "AIzaSyDGCAYOenbzhh7UNELmKaDV-U3XejUTCAs",
        authDomain: "facebook-messenger-rebuild.firebaseapp.com",
        projectId: "facebook-messenger-rebuild",
        storageBucket: "facebook-messenger-rebuild.appspot.com",
        messagingSenderId: "235153313687",
        appId: "1:235153313687:web:82037cc9698f0c0d86bed2",
        measurementId: "G-R0K7KGGX83"
      
})

const db = firebaseApp.firestore();

export default db; 