import { useContext, useState } from "react";
import { ButtonsNavigation } from "../../common-app/buttonsNavigation"
import { PersonalDataForm } from "./components/personalDataForm";
import { CheckoutContext } from "../../core/context/checkoutContext";
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';

export const CheckoutPersonalDataComponent = () => {

    const context = useContext(CheckoutContext);

    const { setFormOk, formData } = context;

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