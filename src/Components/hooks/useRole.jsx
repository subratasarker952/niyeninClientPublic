import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useRole = () => {
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()
    const { isPending: roleIsPending, error: roleError, data: userWithRole = {} } = useQuery({
        queryKey: ['role', user?.email],
        enabled: (user !== null),
        queryFn: async () => {
            const res = await axiosSecure.get(`/role?email=${user?.email}`)
            return res.data
        }
    })

    return { roleIsPending, roleError, userWithRole }

};

export default useRole;