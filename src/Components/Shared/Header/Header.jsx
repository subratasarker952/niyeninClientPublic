import { Link, NavLink, Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaSearch, FaUser } from "react-icons/fa";
import useCart from "../../Context/CartProvider/useCart";
import useRole from "../../hooks/useRole";

const Header = () => {
    const { cart } = useCart()
    const { user, logOutUser } = useAuth()
    const { userWithRole } = useRole()

    if (userWithRole.role == "admin") {
        return <Navigate to='/dashboard'></Navigate>
    }



    const handleLogOutUser = () => {
        logOutUser()
            .then(() => { })
            .catch(error => console.log(error))
    }

    // const menu = <>
    //     <NavLink className={'p-2 m-2'} to="/">Home</NavLink>
    //     <NavLink className={'p-2 m-2'} to="/about">About</NavLink>
    //     <NavLink className={'p-2 m-2'} to="/contact">Contact</NavLink>

    //     {user && <NavLink className={'p-2 m-2'} to="/dashboard">Dashboard</NavLink>}
    // </>
    return (

        <div className="print:hidden">
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <div className="p-1">
                        <h1 className="md:text-5xl text-xl text-pink-500"><Link to="/">NiyeNin</Link></h1>
                    </div>
                </div>
                <div className="border w-full rounded-lg m-4 gap-2">
                    <div className="flex w-full">
                        <input type="text" placeholder="Search in NiyeNin" className="input input-bordered w-full" />
                        <button className="text-2xl p-2">
                            <FaSearch></FaSearch>
                        </button>
                    </div>

                </div>
                <div className="flex-1 gap-2 justify-end">

                    {user ? <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle text-3xl text-pink-500">
                            <FaUser />
                        </div>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-60">
                            <li >
                                <Link className="btn" to='/user/profile'>My Profile</Link>
                            </li>
                            <li >
                                <Link className="btn" to='/user/orders'>My Orders</Link>
                            </li>
                            <li >
                                <Link className="btn" to='/user/wishlist'>My Wishlist</Link>
                            </li>
                            <li >
                                <Link className="btn" to='/user/reviews'>My Reviews</Link>
                            </li>
                            <li >
                                <Link className="btn" to='/user/orderHistory'>OrderHistory</Link>
                            </li>
                            <li >
                                <Link className="btn" to='/user/payments'>My payments</Link>
                            </li>

                            <li>
                                <button onClick={handleLogOutUser} className="btn">LogOut</button>
                            </li>
                        </ul>
                    </div> :
                        <>
                            <NavLink className="px-3 btn" to="/login">Login</NavLink>
                            <p>|</p>
                            <NavLink className={'p-2 m-2 btn'} to="/register">Register</NavLink>
                        </>
                    }




                    <div className="text-4xl text-pink-500">
                        <Link to="/user/cart">
                            <button className="relative">
                                <span className="absolute -top-5 left-4 text-pink-500 text-xl">{cart?.length}</span>
                                <AiOutlineShoppingCart />
                            </button>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;


// <div className="bg-slate-400">
//     <div className="navbar bg-slate-400 fira-sans-regular text-white">
//         <div className="navbar-start">
//             <div className="dropdown">
//                 <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
//                 </div>
//                 <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
//                     {menu}
//                 </ul>
//             </div>
//             <a className="btn btn-ghost text-xl">Logo</a>
//         </div>
//         <div className="navbar-center hidden lg:flex">
//             <ul className="menu menu-horizontal px-1">
//                 {menu}
//             </ul>
//         </div>
//         <div className="navbar-end">
//             {user ? <button onClick={handleLogOutUser} className="btn">LogOut</button> :
//                 <button className="btn"><NavLink className={'p-2 m-2'} to="/login">Login</NavLink></button>

//             }
//             <div>
//                 <AiOutlineShoppingCart />
//             </div>
//         </div>
//     </div>
// </div>

// 