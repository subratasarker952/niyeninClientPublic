import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import Product from "../Pages/Product/Product";
import Contact from "../Pages/Contact/Contact";
import Dashboard from "../Pages/DashboardLayout/Admin/Dashboard";
import DashboardLayout from "../Pages/DashboardLayout/Admin/DashboardLayout";
import PrivateRoute from "../Components/Auth/PrivateRoute/PrivateRoute";
import Login from "../Components/Auth/ManualLogin/Login";
import Register from "../Components/Auth/ManualLogin/Register";
import Shop from "../Pages/Shop/Shop";
import Users from "../Pages/Admin/Users";
import Products from "../Pages/Admin/Products";
import Orders from "../Pages/Admin/Orders";
import Delivery from "../Pages/Admin/Delivery";
import AdminOnly from "../Components/Auth/AdminOnly/AdminOnly";
import UserDashboardLayout from "../Pages/DashboardLayout/User/UserDahboardLayout";
import UserDashboard from "../Pages/DashboardLayout/User/UserDashboard";
import Cart from "../Pages/User/Cart/Cart";
import ShippingAddress from "../Pages/User/ShippingAddress/ShippingAddress";
import ClientOrders from "../Pages/User/ClientOrders/ClientOrders";
import Payments from "../Pages/User/Payments/Payments";
import Profile from "../Pages/User/Profile/Profile";
import Reviews from "../Pages/User/Reviews/Reviews";
import Wishlist from "../Pages/User/Wishlist/Wishlist";
import Returns from "../Pages/User/Returns/Returns";
import OrderHistory from "../Pages/User/OrderHistory/OrderHistory";
import PaymentSuccess from "../Pages/Payment/PaymentSuccess";
import PaymentFail from "../Pages/Payment/PaymentFail";
import PaymentCancel from "../Pages/Payment/PaymentCancel";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/product/:id",
        element: <Product />,
        // loader: async ({ params }) => await fetch(`https://niyenin-public-server.vercel.app/product/${params.id}`)
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/payment/success",
        element: <PaymentSuccess />,
      },
      {
        path: "/payment/fail",
        element: < PaymentFail />,
      },
      {
        path: "/payment/cancel",
        element: <PaymentCancel />,
      },
      {
        path: "/user",
        element:
          <PrivateRoute>
            <UserDashboardLayout />
          </PrivateRoute>,
        children: [
          {
            path: "",
            element: <UserDashboard />
          },
          {
            path: "cart",
            element: <Cart />
          },
          {
            path: "orderForm",
            element: < ShippingAddress />
          },
          {
            path: "payments",
            element: < Payments />
          },
          {
            path: "profile",
            element: < Profile />
          },
          {
            path: "orders",
            element: < ClientOrders />
          },
          {
            path: "reviews",
            element: <Reviews />
          },
          {
            path: "wishlist",
            element: < Wishlist />
          },
          {
            path: "returns",
            element: < Returns />
          },
          {
            path: "orderHistory",
            element: < OrderHistory />
          },
          {
            path: "*",
            element: <div className="my-6">
              <h2 className="text-6xl text-pink-500 text-center">404</h2>
              <h2 className="text-6xl text-pink-500 text-center capitalize">opps! page Not found</h2>
            </div>
          }
        ]
      },


      {
        path: "/dashboard",
        element: <PrivateRoute>
          <AdminOnly>
            <DashboardLayout />
          </AdminOnly>
        </PrivateRoute>,
        children: [
          {
            path: "",
            element: <Dashboard />
          },
          {
            path: "users",
            element: <Users />,
          },
          {
            path: "products",
            element: < Products />,
          },
          {
            path: "orders",
            element: < Orders />,
          },
          {
            path: "delivery",
            element: < Delivery />,
          },
          {
            path: "stats",
            element: <Dashboard />,
          },
          {
            path: "notification",
            element: < Dashboard />,
          },
          {
            path: "systemHealth",
            element: < Dashboard />,
          },
          {
            path: "logs",
            element: < Dashboard />,
          },
          {
            path: "setting",
            element: < Dashboard />,
          },
          {
            path: "*",
            element: <div className="my-6">
              <h2 className="text-6xl text-pink-500 text-center">404</h2>
              <h2 className="text-6xl text-pink-500 text-center capitalize">opps! page Not found</h2>
            </div>
          }
        ]

      },
    ]
  },
  {
    path: "*",
    element: <div className="my-6">
      <h2 className="text-6xl text-pink-500 text-center">404</h2>
      <h2 className="text-6xl text-pink-500 text-center capitalize">opps! page Not found</h2>
    </div>
  }
]);


export default router
