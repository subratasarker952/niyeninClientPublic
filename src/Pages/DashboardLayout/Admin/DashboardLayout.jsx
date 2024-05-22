import { NavLink, Outlet } from 'react-router-dom';
import useAuth from '../../../Components/hooks/useAuth';

const DashboardLayout = () => {
    const {logOutUser}= useAuth()

    const handleLogOutUser = () => {
        logOutUser()
            .then(() => { })
            .catch(error => console.log(error))
    }
    return (
        <div className='flex'>
            <div className='w-2/12 capitalize flex gap-1 flex-col text-left '>
                <p className='text-slate-400 p-1'>Main</p>
                <hr />
                <NavLink className="p-2 rounded-lg mx-2 hover:bg-black hover:text-white" to="/dashboard">dashboard</NavLink>
                <p className='text-slate-400 p-1'>Lists</p>
                <hr />
                <NavLink className="p-2 rounded-lg mx-2 hover:bg-black hover:text-white" to="users">users</NavLink>
                <NavLink className="p-2 rounded-lg mx-2 hover:bg-black hover:text-white" to="products">products</NavLink>
                <NavLink className="p-2 rounded-lg mx-2 hover:bg-black hover:text-white" to="orders">orders</NavLink>
                <NavLink className="p-2 rounded-lg mx-2 hover:bg-black hover:text-white" to="delivery">delivery</NavLink>
                <p className='text-slate-400 p-1'>useful</p>
                <hr />
                <NavLink className="p-2 rounded-lg mx-2 hover:bg-black hover:text-white" to="stats">stats</NavLink>
                <NavLink className="p-2 rounded-lg mx-2 hover:bg-black hover:text-white" to="notification">notification</NavLink>
                <p className='text-slate-400 p-1'>service</p>
                <hr />
                <NavLink className="p-2 rounded-lg mx-2 hover:bg-black hover:text-white" to="systemHealth">systemHealth</NavLink>
                <NavLink className="p-2 rounded-lg mx-2 hover:bg-black hover:text-white" to="logs">logs</NavLink>
                <NavLink className="p-2 rounded-lg mx-2 hover:bg-black hover:text-white" to="setting">setting</NavLink>
                <hr />
                <button onClick={handleLogOutUser} className="bg-red-500 text-white p-2 rounded-lg">LogOut</button>
            </div>
            <div className='w-10/12 '>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashboardLayout;