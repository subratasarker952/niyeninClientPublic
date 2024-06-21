import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useProducts = (filter, search) => {
    const axiosPublic = useAxiosPublic()
    const { isPending: productsLoading, error: productsError, data: products = [] } = useQuery({
        queryKey: ['products', filter],
        queryFn: async () => {
            const res = await axiosPublic.get(`/products?filter=${filter}&search=${search}`)
            return res.data
        }
    })
    return { productsLoading, productsError, products }
};

export default useProducts;