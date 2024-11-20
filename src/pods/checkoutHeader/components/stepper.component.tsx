import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React, { useContext, useEffect } from 'react';
import { Box } from '@mui/material';
import { CheckoutContext } from '../../../core/context/checkoutContext';
import { useLocation } from 'react-router-dom';

const steps = ['Cesta', 'Datos personales', 'Pago'];

export const CheckoutStepper = () => {

    const location = useLocation();
    const context = useContext(CheckoutContext);
    const { activeStep, setActiveStep } = context;

    useEffect(() => {
        setActiveStep(actualLocation(location.pathname));
        console.log(location.pathname);
    }, [location])

    const actualLocation = (param: string) => {
        switch (param) {
            case '/checkout/cart':
                return 0;
            case '/checkout/personal_data':
                return 1;
            case '/checkout/download':
                return 2;
            default:
                return 0;
        }
    }



    const [completed, setCompleted] = React.useState<{
        [k: number]: boolean;
    }>({});

    const totalSteps = () => {
        return steps.length;
    };

    const steps = ['Cesta', 'Datos personales', 'Descargar'];

    return (

        <div className='stepper'>
            {
                steps.map((step, index) => (
                    <div className='step'>
                        <span className={`stepNumber ${activeStep == index ? 'stepNumberActive' : 'stepNumberDisabled'}`}>{index}</span>
                        <span>{step}</span>
                    </div>

                ))
            }
            <div className='stepLine'></div>
        </div>
    );
}