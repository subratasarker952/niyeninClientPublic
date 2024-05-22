import axios from "axios";

const axiosPublic = axios.create({
    baseUrl: 'https://niyenin-server-public-iqorhlbz1-tccdcc8gmailcoms-projects.vercel.app'

})
const usePublicAxios = () => {
    return axiosPublic;
};

export default usePublicAxios;