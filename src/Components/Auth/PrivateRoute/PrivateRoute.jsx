import { Navigate, useLocation } from "react-router-dom";

import Loading from "../../Shared/Loading/Loading";
import useAuth from "../../hooks/useAuth";

const PrivateRoute = ({ children }) => {
    const { user, userLoading } = useAuth()
    const location = useLocation()
    if (userLoading) {
        return <Loading></Loading>
    }
    if (user) {
        return children
    }

    return <Navigate to={'/login'} state={location.pathname}></Navigate>;
};

export default PrivateRoute;

