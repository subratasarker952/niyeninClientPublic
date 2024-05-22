import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";


const axiosSecure = axios.create({
  baseURL: 'https://niyenin-public-server.vercel.app',
  // headers: {
  //   authorization: `bearer ${localStorage.getItem('token')}`
  // }
})
const useAxiosSecure = () => {
  const navigate = useNavigate()
  const { logOutUser } = useAuth()



  useEffect(() => {
    axiosSecure.interceptors.request.use(function (config) {
      // Do something before request is sent
      config.headers.authorization = `bearer ${localStorage.getItem('token')}`
      return config;
    }, function (error) {
      // Do something with request error
      return Promise.reject(error);
    });

    // Add a response interceptor
    axiosSecure.interceptors.response.use(function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data

      return response;
    }, function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      const status = error.response.status
      if (status === 401 || status === 403) {
        logOutUser()
          .then(() => {
            navigate('/login')
          })
          .catch(error => console.log(error))
      }
      return Promise.reject(error);
    });
  }, [navigate, logOutUser])


  return axiosSecure
};

export default useAxiosSecure;

