import { MdOutlineDeleteForever } from "react-icons/md";
// import { GiSelfLove } from "react-icons/gi";
import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../Components/hooks/useAuth";
import useCart from "../../../Components/Context/CartProvider/useCart";

const Cart = () => {
    const navigate = useNavigate()
    const { user } = useAuth()
    const { cart, setCart, setOrder, deleteFromCart, quantityAdd, quantityLess } = useCart()
    let total = 0
    let shipping = 0
    let quantity = 0
    for (const item of cart) {
        total = total + item.price * item.quantity
        shipping = shipping + item?.shipping * item.quantity
        quantity = quantity + item.quantity
    }
    let amount = total + shipping

    if (cart.length < 1) {
        return <div>
            <h3 className="mb-3">Your Cart is Empty</h3>
            <Link to='/shop' className="btn bg-pink-600 text-white hover:text-black">Continue shopping</Link>
        </div>
    }

    const handleOrder = () => {

        if (!user) {
            setCart([])
            return
        }
        const order = {
            email: user.email,
            date: new Date(),
            amount: amount,
            products: cart
        }
        setOrder(order)
        navigate('/user/orderForm')




    }
    return (
        <div className="lg:flex gap-2 my-3">
            <div className="w-full lg:w-2/3 ">
                <div>
                    {cart.map((product, index) => <div key={product?._id} className="flex gap-3  my-3 justify-evenly items-center text-xl">
                        {index + 1}
                        <div className="w-[150px] h-[150px] bg-black rounded-lg">
                            <img src={product.img} alt="" />

                        </div>
                        <div className="w-48">
                            <p className="text-lg">{product?.name}</p>
                            <p className="text-pink-500 ">Price ৳ {product?.price} </p>
                        </div>
                        <div >

                        </div>
                        <div className="flex ">
                            <button onClick={() => quantityLess(product?._id)} className="text-5xl"><CiSquareMinus /></button>
                            <input type='text' maxLength={1} value={product?.quantity} readOnly className="text-5xl w-8 outline-none" min="1" max="5" />
                            <button onClick={() => quantityAdd(product?._id)} className="text-5xl"> <CiSquarePlus /></button>
                        </div>
                        <div>
                            <button onClick={() => deleteFromCart(product)} className="text-red-500 btn btn-circle"><MdOutlineDeleteForever /> </button>
                        </div>

                    </div>)}
                </div>
            </div>
            <div className="w-full lg:w-1/3 ">
                {/* <div className="p-3 flex flex-col bg-white shadow-md m-2 gap-4 text-2xl">
                    <p className="text-2xl">Shipping Address</p>
                    <select name="address" id="">
                        <option value="">Gazipur</option>
                    </select>
                </div> */}

                <div className="p-3 m-2 flex bg-white shadow-md flex-col gap-4 text-2xl">
                    <p className="text-3xl">Order Summary</p>
                    <hr />
                    <div className="flex justify-between">
                        <p>Subtotal ({cart.length} items)</p>
                        <span>৳ {total}</span>
                    </div>
                    <div className="flex justify-between">
                        <p>Shipping Fee</p>
                        <span>৳ {shipping}</span>
                    </div>
                    <div className="flex gap-2 justify-between">
                        <input type="text" name="" id="" className="border p-2 w-full outline-none" placeholder="Enter Voucher Code" />
                        <button className="border w-32 p-2 bg-blue-500 text-white">APPLY</button>
                    </div>
                    <div className="flex justify-between">
                        <p>Total</p>
                        <span>৳ {amount}</span>
                    </div>
                    <button onClick={handleOrder} className="btn w-full bg-pink-500 text-white hover:bg-black">Confirm To CheckOut</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;

//  <div className="flex gap-3 justify-evenly my-3 items-center text-xl">
// <input type="checkbox" name="" id="" />
// <div className="w-[150px] h-[150px] bg-black rounded-lg">

//     <img src="" alt="" />
// </div>
// <div>
//     <p className="text-2xl">Product Name</p>
//     <p>Brand Name</p>
// </div>
// <div >
//     <p>৳ 440</p>
//     <del>৳800 </del>
//     <div>
//         <button className="text-2xl"><GiSelfLove /></button>
//         <button className="text-2xl"><MdOutlineDeleteForever /> </button>
//     </div>
// </div>
// <div className="flex ">
//     <button className="text-5xl"><CiSquareMinus /></button>
//     <input type='text' maxLength={1} value={1} readOnly className="text-5xl w-8 outline-none" min="1" max="5" />
//     <button className="text-5xl"> <CiSquarePlus /></button>
// </div>
// <div>
//     <button className="text-red-500 btn btn-circle">X</button>
// </div>

// </div>

// <del>৳ {product?.oldPrice}</del>
// <div>
//     <button className="text-2xl"><GiSelfLove /></button>
//     <button className="text-2xl"><MdOutlineDeleteForever /> </button>
// </div>