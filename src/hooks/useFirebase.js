import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import initializeAuthentication from "../Firebase/Firebase.init";
import { useEffect, useState } from "react";

initializeAuthentication();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({});
            }
        });
    }, []);


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // Get Email & Password
    const getEmail = (event) => {
        const email = event.target.value;
        setEmail(email);
    }

    const getPassword = (event) => {
        const password = event.target.value;
        setPassword(password);
    }

    const getConfirmPassword = (event) => {
        const confirmPassword = event.target.value;
        setConfirmPassword(confirmPassword);
    }

    // Sign In With Email & Password
    const signUpWithEmailPassword = () => {
        if (password === confirmPassword) {
            createUserWithEmailAndPassword(auth, email, password)
                .then(result => {
                    console.log(result.user);
                    setUser(result.user);
                    window.location = '/home';
                })
                .catch(error => {
                    setError(error.message);
                })
        }
        else{
            setError('Passwords are not similar. Please put similar password and try again.');
        }
    }

    // Sign In With Email & Password
    const signInWithEmailPassword = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            console.log(result.user);
            setUser(result.user);
            window.location = '/home';
        })
        .catch(error => {
            setError(error.message);
        })
    }

    // Google Sign In
    const googleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
                console.log(result.user);
                window.location = '/home';
            })
            .catch(error => {
                setError(error.message);
            })
    }

    // Log-Out
    const logOut = () => {
        signOut(auth)
            .then(() => {
                console.log('Alhamdulillah logged out successfully.');
                setUser({});
            })
            .catch(error => {
                setError(error.message);
            })
    }
    return {
        googleSignIn,
        user,
        error,
        logOut,
        getEmail,
        getPassword,
        getConfirmPassword,
        signUpWithEmailPassword,
        signInWithEmailPassword
    }
}

export default useFirebase;