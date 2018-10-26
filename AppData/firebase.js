import * as firebase from "firebase";
import 'firebase/firestore';

var config = {
    apiKey: "AIzaSyA6yDJuqpcsDlZ0uNv0twPbFwygvgf7Pvs",
    authDomain: "foodmood-a6b8b.firebaseapp.com",
    databaseURL: "https://foodmood-a6b8b.firebaseio.com",
    projectId: "foodmood-a6b8b",
    storageBucket: "foodmood-a6b8b.appspot.com",
    messagingSenderId: "811994218005"
};

firebase.initializeApp(config);

const fire = firebase.firestore();
fire.settings({ timestampsInSnapshots: true });

export const db = fire;