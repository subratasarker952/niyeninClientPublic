import { NavLink, Navigate, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import GoogleLogin from "../SocialLogin/GoogleLogin";

const Login = () => {
    const { user,loginUser, err, setErr } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state || "/"
    

    const handleFormSubmit = (e) => {
        e.preventDefault()
        setErr('')
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        if (password.length < 6) {
            return alert("Password minimum 6 chr")
        }
        else if (password.includes(" ")) {
            return alert("Space Not allow in password")
        }
        loginUser(email, password)
            .then(()=> {
                // const loginUser = res.user
                // console.log(loginUser)
                navigate(from)
                form.reset()
            })
            .catch(error => {
                setErr(error.code)
            })

    }

    if(user) return <Navigate to='/' ></Navigate>

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="text-center flex-1 lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>

                    <div className="card flex-1 w-full   shadow-2xl  bg-base-100">
                        {err && <h2 className="text-red-500">{err}</h2>}

                        <form onSubmit={handleFormSubmit} className="card-body " >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"
                                    name="email"
                                    placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"
                                    name="password"
                                    placeholder="Password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    <button> <NavLink to="/register">Create Account</NavLink></button>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value='Login' className="btn btn-primary" />
                            </div>
                        </form>
                        <div>

                            <GoogleLogin></GoogleLogin>
                        </div>

                    </div>
                </div>
            </div>



        </div>
    );
};

export default Login;