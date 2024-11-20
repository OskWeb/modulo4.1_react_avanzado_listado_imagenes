import { Outlet } from "react-router-dom"
import { CheckoutProvider } from "../core/context/checkoutContext"

export const CheckoutRoutes = () => {
    return (
        <CheckoutProvider>
            <Outlet />
        </CheckoutProvider>
    )
}