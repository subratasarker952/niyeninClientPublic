import { NavLink, Navigate, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { userSendToDb } from "../../hooks/utilityFunctions";


const Register = () => {
    const { user, createUser, updateUser, err, setErr } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state || "/"
    const handleFormSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const displayName = form.displayName.value
        const photoURL = form.photoURL.value
        const email = form.email.value
        const password = form.password.value
        if (password.length < 6) {
            return alert("Password minimum 6 chr")
        }
        else if (password.includes(" ")) {
            return alert("Space Not allow in password")
        }
        createUser(email, password)
            .then(() => {
                updateUser({ displayName, photoURL }).then().catch(err => setErr(err.code))
                userSendToDb(displayName, email)
                navigate(from)
            })
            .catch(error => {
                setErr(error.code)
            })

    }
    if (user) return <Navigate to='/' ></Navigate>
    


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="text-center flex-1 lg:text-left">
                        <h1 className="text-5xl font-bold">Register Now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>

                    <div className="card flex-1 w-full   shadow-2xl  bg-base-100">
                        {err && <h2 className="text-red-500">{err}</h2>}
                        <form onSubmit={handleFormSubmit} className="card-body " >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text"
                                    name="displayName"
                                    placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text"
                                    name="photoURL"
                                    placeholder="PhotoURL" className="input input-bordered" required />
                            </div>
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
                                <label className="label flex">
                                    <p className="label">Have an account?</p>
                                    <NavLink to="/login">Please Login</NavLink>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value='Register' className="btn btn-primary" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Register;