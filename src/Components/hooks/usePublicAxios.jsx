import axios from "axios";

const axiosPublic = axios.create({
    baseUrl: 'https://niyenin-server-public.vercel.app'

})
const usePublicAxios = () => {
    return axiosPublic;
};

export default usePublicAxios;