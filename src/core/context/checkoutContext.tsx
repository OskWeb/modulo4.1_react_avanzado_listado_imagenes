import { createContext, ReactNode } from "react";
import React from "react";

interface ProviderProps {
    children: ReactNode;
}

interface CheckoutContextEntity {
    activeStep: number;
    setActiveStep: ({ }: number) => void;
    formOk: boolean;
    setFormOk: ({ }: boolean) => void;
}

const initialContext: CheckoutContextEntity = {
    activeStep: 0,
    setActiveStep: () => { },
    formOk: false,
    setFormOk: () => { },
};

export const CheckoutContext = createContext<CheckoutContextEntity>(initialContext);

export const CheckoutProvider: React.FC<ProviderProps> = ({ children }) => {
    const [activeStep, setActiveStep] = React.useState(0);
    const [formOk, setFormOk] = React.useState(false);

    return (
        <CheckoutContext.Provider value={{
            activeStep,
            setActiveStep,
            formOk,
            setFormOk,
        }}>
            {children}
        </CheckoutContext.Provider>
    )
}