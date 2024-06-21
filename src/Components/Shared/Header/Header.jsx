import { Link, NavLink, Navigate} from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import useCart from "../../Context/CartProvider/useCart";
import useRole from "../../hooks/useRole";

const Header = () => {
  const { cart } = useCart();
  const { user, logOutUser } = useAuth();
  const { userWithRole } = useRole();

  if (userWithRole.role == "admin") {
    return <Navigate to="/dashboard"></Navigate>;
  }

  const handleLogOutUser = () => {
    logOutUser()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  return (
    <div className="">
      <div className="drawer fixed z-10 left-0 top-0">
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
            <div className="flex-1 px-1 mx-1">
              <h1 className="md:text-5xl text-xl text-pink-500">
                <Link to="/">NiyeNin</Link>
              </h1>
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                {/* Navbar menu content here */}
                <div className="flex">
                  <div className="border w-full rounded-lg m-4 flex justify-center  gap-2">
                    <NavLink
                      to={"/shop"}
                      className={
                        "p-2 rounded-lg mx-2 hover:bg-black hover:text-white"
                      }
                    >
                      Shop
                    </NavLink>
                    <NavLink
                      to={"/about"}
                      className={
                        "p-2 rounded-lg mx-2 hover:bg-black hover:text-white"
                      }
                    >
                      About
                    </NavLink>
                    <NavLink
                      to={"/contact"}
                      className={
                        "p-2 rounded-lg mx-2 hover:bg-black hover:text-white"
                      }
                    >
                      Contact
                    </NavLink>
                  </div>
                  <div className=" flex gap-2 justify-center items-center">
                    {user ? (
                      <div className="dropdown dropdown-end">
                        <div
                          tabIndex={0}
                          role="button"
                          className="btn btn-ghost btn-circle text-3xl text-pink-500"
                        >
                          <FaUser />
                        </div>
                        <ul
                          tabIndex={0}
                          className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-60"
                        >
                          <li>
                            <Link className="btn" to="/user/profile">
                              My Profile
                            </Link>
                          </li>
                          <li>
                            <Link className="btn" to="/user/orders">
                              My Orders
                            </Link>
                          </li>
                          <li>
                            <Link className="btn" to="/user/wishlist">
                              My Wishlist
                            </Link>
                          </li>
                          <li>
                            <Link className="btn" to="/user/reviews">
                              My Reviews
                            </Link>
                          </li>
                          <li>
                            <Link className="btn" to="/user/orderHistory">
                              OrderHistory
                            </Link>
                          </li>
                          <li>
                            <Link className="btn" to="/user/payments">
                              My payments
                            </Link>
                          </li>

                          <li>
                            <button onClick={handleLogOutUser} className="btn">
                              LogOut
                            </button>
                          </li>
                        </ul>
                      </div>
                    ) : (
                      <>
                        <NavLink className="px-3 btn" to="/login">
                          Login
                        </NavLink>
                        <p>|</p>
                        <NavLink className={"p-2 m-2 btn"} to="/register">
                          Register
                        </NavLink>
                      </>
                    )}

                    <div className="text-4xl text-pink-500">
                      <Link to="/user/cart">
                        <button className="relative">
                          <span className="absolute -top-5 left-4 text-pink-500 text-xl">
                            {cart?.length}
                          </span>
                          <AiOutlineShoppingCart />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </ul>
            </div>
          </div>
          {/* Page content here */}
          {/* <Outlet /> */}
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200">
            {/* Sidebar content here */}
            <NavLink
              to={"/shop"}
              className={"p-2 rounded-lg mx-2 hover:bg-black hover:text-white"}
            >
              Shop
            </NavLink>
            <NavLink
              to={"/about"}
              className={"p-2 rounded-lg mx-2 hover:bg-black hover:text-white"}
            >
              About
            </NavLink>
            <NavLink
              to={"/contact"}
              className={"p-2 rounded-lg mx-2 hover:bg-black hover:text-white"}
            >
              Contact
            </NavLink>
          </ul>
        </div>
      </div>
    </div>

  );
};

export default Header;
