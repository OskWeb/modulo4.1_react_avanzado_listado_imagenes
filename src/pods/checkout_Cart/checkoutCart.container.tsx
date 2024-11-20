import { useContext } from "react";
import { CheckoutCartComponent } from "./checkoutCart.component"
import { CartContext } from "../../core/context/cartContext";

export const CheckoutCartContainer = () => {

    const context = useContext(CartContext);

    const { products, setProducts } = context;

    return (
        <CheckoutCartComponent products={products} setProducts={setProducts} />
    )
}