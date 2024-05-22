import { useContext } from 'react';
import { AuthContext } from '../Auth/AuthProvider/AuthProvider';

const useAuth = () => {
    const authInfo = useContext(AuthContext)
    return authInfo;
}

export default useAuth;
