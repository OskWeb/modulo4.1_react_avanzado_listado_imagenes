import { Slide, SlideProps, Snackbar } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import React, { useEffect, useState } from "react";
import { snackbarType } from "../pods/checkout_PersonalData/components/personalDataForm";

export function SlideTransition(props: SlideProps) {
    return <Slide {...props} direction="up" />
}

interface Props {
    snackbarState: snackbarType,
    handleStateChange: (transition: React.ComponentType<TransitionProps & {
        children: React.ReactElement<any, any>;
    }>) => void
}

export const TransitionsSnackbar = ((props: Props) => {

    const [state, setState] = useState<boolean | undefined>(false);

    useEffect(() => {
        setState(props.snackbarState.open);
    }, [props])

    const handleClose = () => {
        props.handleStateChange(SlideTransition);
    };

    return (
        <Snackbar
            open={state}
            onClose={handleClose}
            TransitionComponent={props.snackbarState.transition}
            message="Tus datos se han guardado"
            key={props.snackbarState.transition?.name}
            autoHideDuration={1200}
        />
    )
});