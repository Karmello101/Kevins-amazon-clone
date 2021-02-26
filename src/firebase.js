import firebase from "firebase";

  const firebaseConfig = {
    apiKey: "AIzaSyDNuxOwUkr1Tfma0CRhJzWNI4cHsGPU9us",
    authDomain: "kevins--clone.firebaseapp.com",
    projectId: "kevins--clone",
    storageBucket: "kevins--clone.appspot.com",
    messagingSenderId: "238830002889",
    appId: "1:238830002889:web:f6720988710b6cca41a318",
    measurementId: "G-828FJ3L476"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db , auth };