import { config } from 'dotenv';
import firebase from 'firebase/app';
import 'firebase/firestore';

config();

interface IFirebaseConfig {
    apiKey: string,
    authDomain: string,
    projectId: string,
    storageBucket: string,
    messagingSenderId: string,
    appId: string
}


// {
//     apiKey: "AIzaSyBdqYEWWykTV6qIwmTBf706JnUGTqix2bU",
//     authDomain: "pocathon-9392c.firebaseapp.com",
//     projectId: "pocathon-9392c",
//     storageBucket: "pocathon-9392c.appspot.com",
//     messagingSenderId: "431846985155",
//     appId: "1:431846985155:web:47558993a651811e050176",
//     measurementId: "G-EKWZ8J5ZQG"
//   }


const firebaseConfig: IFirebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY || '',
    authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMIN || '',
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || '',
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET || '',
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID || '',
    appId: process.env.REACT_APP_FIREBASE_APP_ID || ''
};

firebase.initializeApp(firebaseConfig);

export default firebase;