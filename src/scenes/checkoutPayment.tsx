import { AppLayout } from "../layout/app.layout"
import { CheckoutContainer } from "../pods/checkout/checkout.container"
import { CheckoutPaymentContainer } from "../pods/checkout_Payment"
import { CheckoutHeaderContainer } from "../pods/checkoutHeader/checkoutHeader.container"

export const CheckoutPaymentPage: React.FC = () => {
    return (
        <AppLayout>
            <CheckoutHeaderContainer />
            <CheckoutPaymentContainer />
        </AppLayout>
    )

}