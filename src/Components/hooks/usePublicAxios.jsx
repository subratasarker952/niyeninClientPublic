import axios from "axios";

const axiosPublic = axios.create({
    baseUrl: 'https://niyenin-public-server.vercel.app'

})
const usePublicAxios = () => {
    return axiosPublic;
};

export default usePublicAxios;