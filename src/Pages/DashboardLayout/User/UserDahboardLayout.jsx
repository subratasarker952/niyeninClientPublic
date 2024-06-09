import { NavLink, Outlet } from 'react-router-dom';
import useAuth from '../../../Components/hooks/useAuth';

const UserDashboardLayout = () => {
    const { logOutUser } = useAuth()

    const handleLogOutUser = () => {
        logOutUser()
            .then(() => { })
            .catch(error => console.log(error))
    }
    return (
        <div className='flex text-xsm lg:text-lg'>
            <div className=' w-1.5/6 capitalize flex gap-1 flex-col text-left '>
                <p className='text-slate-400 p-1'>Main</p>
                <hr />
                <NavLink className="p-2 rounded-lg mx-2 hover:bg-black hover:text-white" to="/user">dashboard</NavLink>
                <p className='text-slate-400 p-1'>Lists</p>
                <hr />
                <NavLink className="p-2 rounded-lg mx-2 hover:bg-black hover:text-white" to="profile"> profile</NavLink>
                <NavLink className="p-2 rounded-lg mx-2 hover:bg-black hover:text-white" to="orders"> orders</NavLink>
                <NavLink className="p-2 rounded-lg mx-2 hover:bg-black hover:text-white" to="wishlist"> wishList</NavLink>
                <NavLink className="p-2 rounded-lg mx-2 hover:bg-black hover:text-white" to="reviews"> reviews</NavLink>
                <NavLink className="p-2 rounded-lg mx-2 hover:bg-black hover:text-white" to="returns"> returns</NavLink>
                <NavLink className="p-2 rounded-lg mx-2 hover:bg-black hover:text-white" to="orderHistory">History</NavLink>
                <NavLink className="p-2 rounded-lg mx-2 hover:bg-black hover:text-white" to="payments">payments</NavLink>


                <hr />
                <button onClick={handleLogOutUser} className="bg-red-500 text-white p-2 rounded-lg">LogOut</button>
            </div>
            <div className='w-4.5/6'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default UserDashboardLayout;