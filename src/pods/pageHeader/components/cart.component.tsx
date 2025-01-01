import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge } from '@mui/material';
import { useContext } from "react";
import { CartContext } from "../../../core/context/cartContext";

export const Cart = () => {

    const context = useContext(CartContext);
    const { setOpen, products } = context;

    const openCart = () => {
        setOpen(true);
    }

    return (
        <Badge badgeContent={products.length} color='secondary' onClick={() => openCart()}>
            <ShoppingCartOutlinedIcon />
        </Badge>
    )
}