import firebaseConfig from "./firebase.config";
import { initializeApp } from "firebase/app";

const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;

// steps for authentication 
// 1. firebase: create project 
// 2. create web app 
// 3. get configuration 
// 4. inititalize firebase
// 5. Enable auth method 