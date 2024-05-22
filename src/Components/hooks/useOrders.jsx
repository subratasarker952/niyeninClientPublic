import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useOrders = () => {
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()
    const { isPending: ordersLoading, error: ordersError, data: orders = [], refetch:refetchOrders } = useQuery({
        queryKey: ['orders', user?.email],
        enabled: (user !== null),
        queryFn: async () => {
            const res = await axiosSecure.get(`/orders?email=${user?.email}`)
            return res.data
        }
    })
    return { ordersLoading, ordersError, orders, refetchOrders }
};

export default useOrders;