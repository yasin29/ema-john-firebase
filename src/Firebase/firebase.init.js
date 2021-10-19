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
// 4. initialize firebase
// 5. Enable auth method 

// step - 2 
// 1. create login Component
// 2. create register component 
// 3. create route for login and register
/*
step-3
1. set up sign in method
2. setup sign out method
3. use state
4. special observer
5. return necessary methods and states from firebase

step-4
1. create a auth context
2. create context provider
2.1. set context provider value
3. use auth provider
4. create useAuth hook

step-5
1. create private route
2. set private route

step-6
1. after login redirect user to their desire destination
*/