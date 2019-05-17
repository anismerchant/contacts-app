import { firebase, googleAuthProvider } from '../firebase/firebase';

// Login
export const login = (uid) => ({
    type: 'LOGIN',
    uid
});

export const beginLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider);
    };
};

// Logout
export const logout = () => ({
    type: 'LOGOUT'
});

export const beginLogout = () => {
    return () => {
        return firebase.auth().signOut();
    };
};