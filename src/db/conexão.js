 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-analytics.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

export const firebaseConfig = {
     apiKey: "AIzaSyAIvI835Mbn1Rf-DnRnmftFKJ_r3aKwGbc",
     authDomain: "criar-ideia.firebaseapp.com",
     projectId: "criar-ideia",
     storageBucket: "criar-ideia.appspot.com",
     messagingSenderId: "60704051658",
     appId: "1:60704051658:web:b84653d2ef306af128bf33",
     measurementId: "G-RV125DCHF7"
 };

export const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

 //console.log(db)
 /* db.collection('ideias').add({
     nome: 'Teste'
 }) */

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);

 export default db