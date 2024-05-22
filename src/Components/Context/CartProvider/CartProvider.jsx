import Swal from 'sweetalert2'
import { createContext, useState } from "react";


export const CartContext = createContext(null)
const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])
    const [order, setOrder] = useState({})
    const [cartLoading, setCartLoading] = useState(true)


    const quantityLess = (id) => {
        const exist = cart.find(item => (item._id == id))
        if (exist) {
            exist.quantity = exist.quantity > 1 ? exist.quantity - 1 : 1
        }
        setCart([...cart]);

    }
    const quantityAdd = (id) => {
        const exist = cart.find(item => (item._id == id))
        if (exist) {
            exist.quantity = exist.quantity < 5 ? exist.quantity + 1 : 5
        }
        setCart([...cart]);

    }
    const addToCart = (paramsProduct) => {
        const { img, name, price, shipping, _id } = paramsProduct
        const product = { _id, name, price, img, shipping, quantity: 1 }
        const exist = cart.find(item => (item._id == product._id))
        if (exist) {
            exist.quantity = exist.quantity < 5 ? exist.quantity + 1 : 5
            setCart([...cart])
            return

        }
        setCart([...cart, product])
    }
    const deleteFromCart = (product) => {
        Swal.fire({
            title: "Are you sure?",
            text: "Product Remove From Cart?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Remove it!"
        }).then((result) => {
            if (result.isConfirmed) {
                const remainingItem = cart.filter(item => product._id !== item._id)
                setCart(remainingItem)
                setCartLoading(false)
                Swal.fire({
                    title: "Removed!",
                    text: "Your file has been removed.",
                    icon: "success"
                });
            }
        });


    }



    const cartInfo = {
        cart, cartLoading, order, setOrder, addToCart, setCart, deleteFromCart, quantityAdd, quantityLess
    }

    return (
        <CartContext.Provider value={cartInfo}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;
