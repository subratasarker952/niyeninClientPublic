import { Navigate, useLocation } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";
import useAuth from "../../hooks/useAuth";
import useRole from "../../hooks/useRole";

const AdminOnly = ({ children }) => {
    const location = useLocation()
    const { userLoading, user } = useAuth()
    const { roleIsPending, userWithRole } = useRole()
    if (userLoading || roleIsPending) {
        return <Loading></Loading>
    }

    if (user && (userWithRole.role == 'admin')) {
        return children
    }

    return <Navigate to={'/'} state={location.pathname}></Navigate>;
};

export default AdminOnly;