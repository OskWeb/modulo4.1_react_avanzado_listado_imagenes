import { useContext, useEffect } from 'react';
import { CheckoutContext } from '../../../core/context/checkoutContext';
import { useLocation } from 'react-router-dom';

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