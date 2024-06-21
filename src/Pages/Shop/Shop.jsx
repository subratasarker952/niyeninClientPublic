import useAuth from "../../Components/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useCart from "../../Components/Context/CartProvider/useCart";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";

const Shop = () => {
  const { user } = useAuth();
  const [filter, setFilter] = useState("bestMatch");
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const { addToCart } = useCart();
  useEffect(() => {
    fetch(
      `https://niyenin-server-public.vercel.app/products?filter=${filter}&search=${search}`,{
        method:'GET',
        headers:{
          authorization : `bearer ${localStorage.getItem('token')}`
        }
      }
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [products, filter]);
  if (!products)
    return <h2 className="text-5xl text-center">Please Wait...</h2>;

  const handleAddToCart = (product) => {
    if (!user) {
      Swal.fire({
        title: "You are not Login?",
        text: "Please Login to place order",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          return navigate("/login");
        }
      });
    }
    user && addToCart(product);
  };

  return (
    <div>
      <div className="flex">
        <div className="hidden md:block md:w-3/12">
          <div>
            <div className="flex flex-col p-2 gap-3 text-left">
              <p className="text-xl ">Filter</p>
              <hr />
              <p className="btn">Free Delivery</p>
              <p className="btn">Cash on Delivery</p>
            </div>
          </div>
        </div>
        <div className="full md:w-9/12">
          <div className="flex justify-between items-center">
            <div className="w-full">
              <input
                type="text"
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search in NiyeNin"
                className="input input-bordered border-pink-500 w-full"
              />
            </div>
            <div className="">
              <select
                onChange={(e) => setFilter(e.target.value)}
                name="filter"
                id=""
                className="input input-bordered border-pink-500 p-2 rounded-xl m-2"
              >
                <option className="" value="">
                  Sort By
                </option>
                <option className="" value="bestMatch">
                  Sort By Name
                </option>
                <option className="" value="piceHighToLow">
                  Price High To Low
                </option>
                <option className="" value="priceLowToHigh">
                  Price Low To High
                </option>
              </select>
            </div>
          </div>
          <div className="grid min-h-screen md:shadow-lg md:grid-cols-3 grid-cols-1 gap-3  text-center">
            {products?.map((product) => (
              <div
                key={product._id}
                className="my-3 border border-black rounded-lg p-2 text-xl text-center"
              >
                <div className="w-full h-auto mx-auto bg-black rounded-lg">
                  <img src={product.img} alt="" />
                </div>
                <div>
                  <p className="text-sm">{product.name}</p>
                  <p>Price: {product.price} tk</p>
                </div>
                <div>
                  <p>{product.brand}</p>
                  <del>{product.oldPrice} </del>
                </div>

                <div>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="btn w-32 m-1 bg-green-500 hover:text-black text-white"
                  >
                    Add To Cart
                  </button>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="btn w-32 m-1 bg-pink-500 hover:text-black text-white"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
