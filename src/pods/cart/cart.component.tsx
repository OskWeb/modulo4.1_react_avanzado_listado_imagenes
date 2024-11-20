import { Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Product } from '../../common-app/product';
import { PictureInfo } from '../../core/interfaces/PictureInfo';
import RemoveShoppingCartOutlinedIcon from '@mui/icons-material/RemoveShoppingCartOutlined';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link } from 'react-router-dom';
import { EmptyCart } from '../../common-app/emptyCart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

interface CartProps {
    closeCart: () => void,
    products: PictureInfo[],
    setProducts: (product: PictureInfo[] | []) => void
}

export const CartComponent: React.FC<CartProps> = ({
    closeCart,
    products,
    setProducts
}) => {

    return (
        <div className="cart">
            <div className='cart-top'>
                <div className='cart-top-title'>
                    <ShoppingCartIcon />
                    <span>Mi cesta</span>
                </div>

                <Button onClick={() => closeCart()} sx={{
                    color: 'white'
                }}>
                    <CloseIcon />
                </Button>

            </div>
            <div className='cart-content'>
                {
                    Array.isArray(products) && products.length > 0 ? (
                        <>
                            <Button onClick={() => setProducts([])} className='emptyCartButton'>
                                Vaciar Carrito <RemoveShoppingCartOutlinedIcon />
                            </Button>
                            <div className='cart-content-data'>
                                {
                                    products.map((product, index) => (
                                        <Product product={product} key={index} products={products} setProducts={setProducts} />
                                    ))
                                }
                            </div>
                            <Button
                                color='success'
                                variant='contained'
                                component={Link}
                                to="/checkout/cart"
                                className='goToCartButton'
                                sx={{
                                    backgroundColor: 'rgb(78, 78, 240)'
                                }}
                            >
                                Ir a mi cesta <ChevronRightIcon />
                            </Button>
                        </>

                    ) : (
                        <EmptyCart iconSize={40} />
                    )
                }
            </div>
        </div>
    )
}