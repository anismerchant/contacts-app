import { firebase, googleAuthProvider } from '../firebase/firebase';

export const beginLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider);
    };
};

export const beginLogout = () => {
    return () => {
        return firebase.auth().signOut();
    };
};