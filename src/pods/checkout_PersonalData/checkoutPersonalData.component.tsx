import { useContext, useState } from "react";
import { ButtonsNavigation } from "../../common-app/buttonsNavigation"
import { PersonalDataForm } from "./components/personalDataForm";
import { CheckoutContext } from "../../core/context/checkoutContext";
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import { CartContext } from "../../core/context/cartContext";

export const CheckoutPersonalDataComponent = () => {

    const checkoutContext = useContext(CheckoutContext);
    const cartContext = useContext(CartContext);

    const { setFormOk } = checkoutContext;
    const { formData } = cartContext;

    useState(() => {
        if (formData.email == "") {
            setFormOk(false);
        } else {
            setFormOk(true);
        }
    })
    return (
        <div className="checkoutPersonalDataBox">
            <div className="step-title">
                <h1>Personal data</h1>
            </div>
            <div className="personalInfoSection">
                <PersonalDataForm />
                <div className="infoBadge">
                    <span>
                        Introduce tu información básica
                    </span>
                    <BadgeOutlinedIcon sx={{
                        color: 'white',
                        fontSize: '40px',
                        marginTop: '15px'
                    }} />
                </div>
            </div>
            <ButtonsNavigation back={"/checkout/cart"} next={"/checkout/download"} />
        </div>
    )
}