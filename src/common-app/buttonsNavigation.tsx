import { Button } from "@mui/material"
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link } from "react-router-dom";
import { useFormikContext } from "formik";
import { useContext } from "react";
import { CheckoutContext } from "../core/context/checkoutContext";

interface props {
    back: string;
    next: string;
}
export const ButtonsNavigation = ({ back, next }: props) => {

    const context = useContext(CheckoutContext);

    const { formOk } = context;

    return (
        <div className="buttonsNavigation">

            {
                back ? (
                    <Button
                        color='success'
                        variant='contained'
                        component={Link}
                        to={back}
                        sx={{
                            backgroundColor: 'rgb(78, 78, 240)'
                        }}
                    >
                        <ChevronLeftIcon /> Anterior
                    </Button>
                ) : (
                    ""
                )
            }
            {
                next ? (

                    <Button
                        color='success'
                        variant='contained'
                        component={Link}
                        to={next}
                        sx={{
                            backgroundColor: 'rgb(78, 78, 240)'
                        }}
                        disabled={formOk ? false : true}
                    >
                        Siguiente <ChevronRightIcon />
                    </Button>
                ) : (
                    ""
                )
            }
        </div>
    )

}