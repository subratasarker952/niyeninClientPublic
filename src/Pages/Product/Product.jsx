import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";
import { GiSelfLove } from "react-icons/gi";
import { useLoaderData } from "react-router-dom";
import useCart from "../../Components/Context/CartProvider/useCart";

const Product = () => {
    const { cart, addToCart, quantityAdd, quantityLess } = useCart()
    // const product= useLoaderData()
    // console.log(product);

    const product = {
        _id:1,
        name: 'Talukder Panjabi',
        brand: 'Talukder',
        price: 1300,
        oldPrice: 1600,
        shipping: 50,
        stack: 10,
        size:['38', '40', '42', '44', '48'],
        quantity: 1
    }
    const {name, brand, price, shipping,_id, quantity, size }= product

    return (
        <div className="my-10">
            <dir className="flex h-[500px]">
                <div className="w-4/12 p-1">
                    <div className="h-[400px]">
                        <img src="" className="w-full h-full" alt="" />
                    </div>
                    <div className="h-[100px] bg-black"></div>
                </div>
                <div className="w-8/12 text-left p-3">
                    <div className="flex flex-col gap-3">
                        <h1 className="text-3xl">{name}</h1>
                        <div className="flex justify-between">
                            <p className=""> {brand}</p>
                            <button className="text-3xl" ><GiSelfLove /></button>
                        </div>
                        <hr />
                        <p className="text-4xl text-red-600">৳ {price}</p>
                        <hr />
                        <div className="text-3xl">
                            <label htmlFor="size" className="p-2">Size</label>
                            <select name="size" id="size" className="p-2">
                                <option value="38">38</option>
                                <option value="40">40</option>
                                <option value="42">42</option>
                                <option value="46">46</option>
                                <option value="48">48</option>
                            </select>
                        </div>
                        <hr />
                        <div className="text-3xl">
                            <label htmlFor="size" className="p-2">Size</label>
                            <select name="size" id="size" className="p-2 capitalize">
                                <option value="red">red</option>
                                <option value="green">green</option>
                                <option value="white">white</option>
                                <option value="black">black</option>
                            </select>
                        </div>
                        <hr />
                        <div className="flex">
                            <label htmlFor="size" className="p-2">Quantity</label>
                            <div className="flex ">
                                <button className="text-5xl bg-white"><CiSquareMinus /></button>
                                <input type='text' maxLength={1} value={1} readOnly className="text-4xl w-5 outline-none" min="1" max="5" />
                                <button className="text-5xl bg-white"> <CiSquarePlus /></button>
                            </div>
                        </div>
                        <hr />
                        <div>
                            <button className="btn w-60 m-1 bg-green-500 hover:text-black text-white">Add To Cart</button>
                            <button className="btn w-60 m-1 bg-pink-500 hover:text-black text-white">CheckOut Now</button>
                        </div>
                    </div>
                </div>
            </dir>
        </div>
    );
}

export default Product;
