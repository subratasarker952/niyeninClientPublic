import useAxiosPublic from "./useAxiosPublic";

const userSendToDb = (name, email) => {
    const axiosPublic = useAxiosPublic()
    const role = 'user'
    const userInfo = {
        name, email, role
    }
    axiosPublic.post('/users', userInfo).then(() => { }).catch(error => console.log(error));
}


export { userSendToDb }