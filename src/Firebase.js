
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { collection, getFirestore } from "firebase/firestore";
import { addDoc } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyBYo7oPVjiw6h-YF2BqIM02GfbrvAeRkSE",
  authDomain: "ott-project-cfc16.firebaseapp.com",
  projectId: "ott-project-cfc16",
  storageBucket: "ott-project-cfc16.firebasestorage.app",
  messagingSenderId: "144194399406",
  appId: "1:144194399406:web:56e18455383ac168c6d13f",
  measurementId: "G-683T9PTD5Q"
};

const app = initializeApp(firebaseConfig)
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

const signUp = async (name,email,password)=>{
    try{
      const res =  await createUserWithEmailAndPassword(auth,email,password);
      const user =res.user;
      await addDoc(collection(db,"user"),{
        uid: user.uid,
        name,
        authProvide: "local",
        email,
      });
    }catch(error){
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }

}

const login =async (email,password)=>{
  try {
    await signInWithEmailAndPassword(auth,email,password);
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
}

const logout =() =>{
  signOut(auth);
}

export {auth,db,login,signUp,logout};