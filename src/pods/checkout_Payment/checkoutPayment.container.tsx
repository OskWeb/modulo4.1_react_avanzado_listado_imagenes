import { useContext } from "react";
import { CheckoutPaymentComponent } from "./checkoutPayment.component"
import { CartContext } from "../../core/context/cartContext";

export const CheckoutPaymentContainer = () => {

    const context = useContext(CartContext);

    const { products } = context;

    return (
        <CheckoutPaymentComponent products={products} />
    )
}