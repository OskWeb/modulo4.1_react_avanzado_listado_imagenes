import { useLocation } from "react-router-dom"
import { CartComponent } from "./cart.component"
import { CartContext } from "../../core/context/cartContext";
import { useContext } from "react";

export const CartContainer = () => {

    const location = useLocation();
    const isCheckoutRoute = location.pathname.startsWith('/checkout');
    const context = useContext(CartContext);
    const { open, setOpen, products, setProducts } = context;
    const closeCart = () => {
        setOpen(false);
    }

    return (
        isCheckoutRoute ? (
            null
        ) : (
            open ? <CartComponent closeCart={closeCart} products={products} setProducts={setProducts} /> : null
        )
    )
}