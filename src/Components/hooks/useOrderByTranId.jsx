import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useOrderByTranId = (tran_id) => {
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()
    const { isPending: orderIsLoading, error: orderError, data: order = {} } = useQuery({
        queryKey: ['order', user?.email, tran_id],
        enabled: (user !== null),
        queryFn: async () => {
            const res = await axiosSecure.get(`/order/${tran_id}?email=${user?.email}`)
            return res.data
        }
    })
    return { orderIsLoading, orderError, order }
};

export default useOrderByTranId;