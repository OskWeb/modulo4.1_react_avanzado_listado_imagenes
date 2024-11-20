import { AppLayout } from "../layout/app.layout"
import { CheckoutPersonalDataContainer } from "../pods/checkout_PersonalData"
import { CheckoutHeaderContainer } from "../pods/checkoutHeader/checkoutHeader.container"

export const CheckoutPersonalDataPage: React.FC = () => {
    return (
        <AppLayout>
            <CheckoutHeaderContainer />
            <CheckoutPersonalDataContainer />
        </AppLayout>
    )

}