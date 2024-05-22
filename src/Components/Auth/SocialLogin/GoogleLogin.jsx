import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import auth from "../Firebase/firebase.config";
import { useLocation, useNavigate } from "react-router-dom";
import { userSendToDb } from "../../hooks/utilityFunctions";


const provider = new GoogleAuthProvider();

const GoogleLogin = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state || "/"
    
    const handleGoogleLogin = () => {

        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                userSendToDb(user.displayName, user.email)
                navigate(from)
            
               
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
                console.log(errorCode, errorMessage, email, credential);
            });

    }

    return (
        <button onClick={handleGoogleLogin} className="btn rounded">
            Google Login
        </button>
    );
};

export default GoogleLogin;