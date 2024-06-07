import {initializeApp} from 'firebase/app';
import {collection, getDocs, getFirestore, addDoc, deleteDoc, doc} from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA9Xbgc_r5_L0d88-74hBCGX1sHDXYHpiE",
    authDomain: "abc-learning-20390.firebaseapp.com",
    projectId: "abc-learning-20390",
    storageBucket: "abc-learning-20390.appspot.com",
    messagingSenderId: "276792822520",
    appId: "1:276792822520:web:28dd44544f0f171c64090d",
    measurementId: "G-YK137N1Y9P"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getCollection(collectionName) {
    const collectionReference = collection(db, collectionName);
    const snapshot = await getDocs(collectionReference);
    return snapshot.docs.map(doc => doc.data());
}

export async function addToCollection(collectionName, data) {
    // Add a new document with a generated id.
    const myCollection = collection(db, collectionName);
    await addDoc(myCollection, data);
}

export async function removeCollection(collectionName) {
    let Ids = []
    const querySnapshot = await getDocs(collection(db, collectionName));
    querySnapshot.forEach((doc) => {
        Ids.push(doc.id)
    });
    for (let i = 0; i < Ids.length; i++) {
        await deleteDoc(doc(db, collectionName, Ids[i]));
    }
    let check = await getCollection(collectionName)
    do{
        await sleep(100)
    }while (check.length > 0)
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
