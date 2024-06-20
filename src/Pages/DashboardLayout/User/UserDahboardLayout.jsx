import { Link, NavLink, Outlet } from "react-router-dom";
import useAuth from "../../../Components/hooks/useAuth";

const UserDashboardLayout = () => {
  const { logOutUser } = useAuth();

  const handleLogOutUser = () => {
    logOutUser()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const menu = (
    <div className=" capitalize flex gap-1 flex-col text-left ">
      <p className="text-slate-400 p-1">Main</p>
      <hr />
      <NavLink
        className="p-2 rounded-lg mx-2 hover:bg-black hover:text-white"
        to="/user"
      >
        dashboard
      </NavLink>
      <p className="text-slate-400 p-1">Lists</p>
      <hr />

      <NavLink
        className="p-2 rounded-lg mx-2 hover:bg-black hover:text-white"
        to="cart"
      >
        cart
      </NavLink>
      <NavLink
        className="p-2 rounded-lg mx-2 hover:bg-black hover:text-white"
        to="profile"
      >
        profile
      </NavLink>
      <NavLink
        className="p-2 rounded-lg mx-2 hover:bg-black hover:text-white"
        to="orders"
      >
        orders
      </NavLink>
      <NavLink
        className="p-2 rounded-lg mx-2 hover:bg-black hover:text-white"
        to="wishlist"
      >
        wishList
      </NavLink>
      <NavLink
        className="p-2 rounded-lg mx-2 hover:bg-black hover:text-white"
        to="reviews"
      >
        reviews
      </NavLink>
      <NavLink
        className="p-2 rounded-lg mx-2 hover:bg-black hover:text-white"
        to="returns"
      >
        returns
      </NavLink>
      <NavLink
        className="p-2 rounded-lg mx-2 hover:bg-black hover:text-white"
        to="orderHistory"
      >
        History
      </NavLink>
      <NavLink
        className="p-2 rounded-lg mx-2 hover:bg-black hover:text-white"
        to="payments"
      >
        payments
      </NavLink>

      <hr />
      <button
        onClick={handleLogOutUser}
        className="bg-red-500 text-white p-2 rounded-lg"
      >
        LogOut
      </button>
    </div>
  );
  return (
    <>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar bg-base-300">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-1 px-2 mx-2">
              <h1 className="md:text-5xl text-xl text-pink-500">
                <Link to="/">NiyeNin</Link>
              </h1>
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                {/* Navbar menu content here */}

                <li>
                  <Link className="px-2 mx-2" to="/user/cart">
                    Cart
                  </Link>
                </li>
                <li>
                  <Link className="px-2 mx-2" to="/user/profile">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link className="px-2 mx-2" to="/user/orders">
                    Orders
                  </Link>
                </li>
                <li>
                  <Link className="px-2 mx-2" to="/user/wishlist">
                    Wishlist
                  </Link>
                </li>
                <li>
                  <Link className="px-2 mx-2" to="/user/reviews">
                    Reviews
                  </Link>
                </li>
                <li>
                  <Link className="px-2 mx-2" to="/user/orderHistory">
                    OrderHistory
                  </Link>
                </li>
                <li>
                  <Link className="px-2 mx-2" to="/user/payments">
                    Payments
                  </Link>
                </li>

                <li>
                  <button
                    onClick={handleLogOutUser}
                    className="px-2 mx-2 bg-red-500 text-white hover:text-black"
                  >
                    LogOut
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <Outlet />
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200">
            {/* Sidebar content here */}
            {menu}
          </ul>
        </div>
      </div>
    </>
  );
};

export default UserDashboardLayout;
