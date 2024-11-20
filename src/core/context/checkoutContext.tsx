import { createContext, ReactNode } from "react";
import React from "react";



interface ProviderProps {
    children: ReactNode;
}

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
}

interface CheckoutContextEntity {
    activeStep: number;
    setActiveStep: ({ }: number) => void;
    formOk: boolean;
    setFormOk: ({ }: boolean) => void;
    formData: FormData,
    setFormData: ({ }: FormData) => void;
}

// Valor inicial vacío
const initialContext: CheckoutContextEntity = {
    activeStep: 0,
    setActiveStep: () => { },
    formOk: false,
    setFormOk: () => { },
    formData: {
        firstName: '',
        lastName: '',
        email: ''
    },
    setFormData: () => { }
};

export const CheckoutContext = createContext<CheckoutContextEntity>(initialContext);

export const CheckoutProvider: React.FC<ProviderProps> = ({ children }) => {
    const [activeStep, setActiveStep] = React.useState(0);
    const [formOk, setFormOk] = React.useState(false);
    const [formData, setFormData] = React.useState({
        firstName: '',
        lastName: '',
        email: ''
    });

    return (
        <CheckoutContext.Provider value={{
            activeStep,
            setActiveStep,
            formOk,
            setFormOk,
            formData,
            setFormData
        }}>
            {children}
        </CheckoutContext.Provider>
    )
}