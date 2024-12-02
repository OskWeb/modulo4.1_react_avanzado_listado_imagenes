import { FormGroup } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useContext, useState } from 'react';
import { CheckoutContext } from '../../../core/context/checkoutContext';
import { SlideTransition, TransitionsSnackbar } from '../../../common/transitionSnackbar';
import { TransitionProps } from '@mui/material/transitions';
import React from 'react';
import { CartContext } from '../../../core/context/cartContext';

const personalDataSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(3, 'Debe de tener al menos 3 caracteres')
        .max(50, 'Debe de tener máximo 50 caracteres')
        .required('Debes de introducir tu nombre'),
    lastName: Yup.string()
        .min(3, 'Debe de tener al menos 3 caracteres')
        .max(50, 'Debe de tener máximo 50 caracteres')
        .required('Debes de introducir tu apellido/s'),
    email: Yup.string().email('Email inválido').required('Debes de introducir tu email')
});

export type snackbarType = {
    open?: boolean,
    transition?: React.ComponentType<TransitionProps & { children: React.ReactElement<any, any> }>
}
export const PersonalDataForm = () => {

    const checkoutContext = useContext(CheckoutContext);
    const { setFormOk } = checkoutContext;
    const cartContext = useContext(CartContext);
    const { formData, setFormData } = cartContext;

    const [snackbar, setSnackbar] = useState<snackbarType>({
        open: false,

    });

    const handleSubmit = async (values) => {
        console.log(values);
        setFormOk(true);
        setFormData(values);
        handleStateChange(SlideTransition);
    }

    const handleStateChange = (
        transition: React.ComponentType<
            TransitionProps & {
                children: React.ReactElement<any, any>;
            }
        >
    ) => {
        setSnackbar({
            open: !snackbar.open,
            transition,
        });
    }


    return (
        <Formik
            initialValues={{
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email
            }}
            validationSchema={personalDataSchema}
            onSubmit={handleSubmit}
        >
            {({ errors, touched }) => (
                <Form className='personalDataForm'>
                    <FormGroup className='formGroup'>
                        <div className='form-control-box'>
                            <Field
                                className="form-control"
                                name="firstName"
                                placeholder="Nombre"
                                type="text"
                            />
                            {!errors.firstName && touched.firstName && (
                                <CheckCircleIcon style={{ color: "#05cc30" }} className='checkForm' />
                            )}
                        </div>

                        <ErrorMessage
                            name='firstName'
                            component="div"
                            className='field-error text-danger'
                        />
                    </FormGroup>
                    <FormGroup>
                        <div className='form-control-box'>
                            <Field
                                className="form-control"
                                name="lastName"
                                placeholder="Apellido"
                                type="text"


                            />
                            {!errors.lastName && touched.lastName && (
                                <CheckCircleIcon style={{ color: "#05cc30" }} className='checkForm' />
                            )}
                        </div>
                        <ErrorMessage
                            name='lastName'
                            component="div"
                            className='field-error text-danger'
                        />
                    </FormGroup>
                    <FormGroup>
                        <div className='form-control-box'>
                            <Field
                                className="form-control"
                                name="email"
                                placeholder="Email"
                                type="email"


                            />
                            {!errors.email && touched.email && (
                                <CheckCircleIcon style={{ color: "#05cc30" }} className='checkForm' />
                            )}
                        </div>


                        <ErrorMessage
                            name='email'
                            component="div"
                            className='field-error text-danger'
                        />
                    </FormGroup>
                    <div className='submitPersonalDataButtonBox'>
                        <button
                            color='primary'
                            className='submitPersonalDataButton'
                            type='submit'
                        >
                            Guardar
                        </button>
                    </div>


                    <TransitionsSnackbar snackbarState={snackbar} handleStateChange={handleStateChange} />
                </Form>
            )}




        </Formik>
    )
}