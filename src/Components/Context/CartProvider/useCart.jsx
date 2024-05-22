import { useContext } from 'react';
import { CartContext } from './CartProvider';

const useCart = () => {
    const cartInfo = useContext(CartContext)
    return cartInfo;
}

export default useCart;