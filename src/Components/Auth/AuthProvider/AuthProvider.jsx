import { createUserWithEmailAndPassword, deleteUser, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updatePassword, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import useAxiosPublic from "../../hooks/useAxiosPublic";


export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const axiosPublic = useAxiosPublic()
    const [user, setUser] = useState(null)
    const [err, setErr] = useState("")
    const [success, setSuccess,] = useState("")
    const [userLoading, setUserLoading] = useState(true)


    useEffect(() => {
        setUserLoading(true)
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser)
                const email = currentUser.email
                axiosPublic.post('/jwt', { email: email })
                    .then(res => localStorage.setItem('token', res.data.token))
                setUserLoading(false)
                // ...
            } else {
                logOutUser().then(() => {
                    localStorage.removeItem('token')
                }).catch(err => console.log(err))
                setUser(null)
                setUserLoading(false)
            }
        })
        return () => {
            return unSubscribe()
        }
    }, [axiosPublic, user])

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (userInfo) => {
        return updateProfile(auth?.currentUser, userInfo)
    }
    const updateUserEmail = (userEmail) => {
        return updateProfile(auth?.currentUser, userEmail)
    }
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const emailVerification = () => {
        return sendEmailVerification(auth.currentUser)
    }
    const updateUserPassword = (newPassword) => {
        return updatePassword(auth.currentUser, newPassword)
    }
    const passwordResetEmail = (email) => {
        return sendPasswordResetEmail(auth, email)
    }
    const deleteUserProfile = () => {
        return deleteUser(auth.currentUser)
    }
    const logOutUser = () => {
        return signOut(auth)
    }






    const authInfo = {
        user,
        userLoading,
        err, setErr,
        success, setSuccess,
        createUser,
        updateUser,
        loginUser,
        updateUserEmail,
        emailVerification,
        updateUserPassword,
        passwordResetEmail,
        deleteUserProfile,
        logOutUser

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
