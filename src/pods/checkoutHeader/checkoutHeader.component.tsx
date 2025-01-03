import { AppBar, Button } from '@mui/material'
import { Link } from 'react-router-dom';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { CheckoutStepper } from './components/stepper.component';

export const CheckoutHeaderComponent = () => {

    return (
        <AppBar
            sx={{
                margin: '0px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px 50px 10px 50px',
                backgroundColor: '#42a5f5',
                zIndex: 1,
            }}
            className='checkoutHeader'
        >
            <div className='buttonBox'>
                <Button
                    color='success'
                    variant='contained'
                    component={Link}
                    to="/cats"
                    sx={{
                        backgroundColor: 'rgb(78, 78, 240)'
                    }}
                >
                    <ChevronLeftIcon /> Continuar comprando
                </Button>
            </div>
            <CheckoutStepper />
        </AppBar>
    )
}