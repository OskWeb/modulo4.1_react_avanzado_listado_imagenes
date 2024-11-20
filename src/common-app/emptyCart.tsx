import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

export const EmptyCart = ({ iconSize }) => {
    return (
        <div className='emptyCartBox'>
            <ShoppingBagIcon sx={{ fontSize: { iconSize } }} color='primary' />
            <div className='text-info'>
                <p className='text-info-black'>Tu cesta de la compra está vacía.</p>
                <p>Continúa comprando y encuentra tus productos favoritos</p>
            </div>
        </div>
    )
}