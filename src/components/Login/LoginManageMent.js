import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";

export const initializeApp = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
}

export const googlePopUpSignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(googleProvider)
        .then((result) => {
            const { displayName, email } = result.user;
            const newUserInfo = {
                name: displayName,
                email: email,
                isSignIn: true,
                success: true,
                error: ''
            }
            return newUserInfo;
            // console.log(result);
        })
        .catch((error) => {
            console.log(error);
            console.log(error.message);
        });
}

export const facebookLoginWithPopUp = () => {
    const facebookProvider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(facebookProvider)
        .then((result) => {
            console.log(result);
            const { displayName, email } = result.user;
            const newUserInfo = {
                name: displayName,
                email: email,
                isSignIn: '',
                error: '',
                success: ''
            }
            return newUserInfo;
        })
        .catch((error) => {
            console.log(error);
            console.log(error.message);
        });

}

export const createNewUser = (name, email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(res => {
            // console.log(res);
            const { email } = res.user;
            const newUserInfo = {
                name: name,
                email: email,
                isSignIn: true,
                success: true,
                error: ''
            }
            // console.log(newUserInfo);
            return newUserInfo;
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
            // ..
        });
}

export const signInUser = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
        .then(res => {
            // console.log(res);
            const { email } = res.user;
            const newUserInfo = {
                email: email,
                isSignIn: true,
                success: true,
                error: ''
            }
            // console.log(newUserInfo);
            return newUserInfo;
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
        });
}