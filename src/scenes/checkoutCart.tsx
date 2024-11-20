import { AppLayout } from "../layout/app.layout"
import { CheckoutCartContainer } from "../pods/checkout_Cart"
import { CheckoutHeaderContainer } from "../pods/checkoutHeader/checkoutHeader.container"

export const CheckoutCartPage: React.FC = () => {
    return (
        <AppLayout>
            <CheckoutHeaderContainer />
            <CheckoutCartContainer />
        </AppLayout>
    )

}