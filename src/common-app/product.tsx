import { Button } from "@mui/material"
import { PictureInfo } from "../pods/listDogs/listDogs.vm"
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

interface ProductEntity {
    product: PictureInfo,
    products: PictureInfo[],
    setProducts: (products: PictureInfo[]) => void
}

export const Product: React.FC<ProductEntity> = ({ product, products, setProducts }) => {

    const deleteProduct = () => {
        setProducts(
            products.filter(a => a.id !== product.id)
        );
    }
    return (
        <div className="cartProduct">
            <div className="left-content">
                <img src={product.picUrl} alt="" width="50px" />
                <span>{product.title}</span>
            </div>

            <Button onClick={() => deleteProduct()}>
                <DeleteForeverOutlinedIcon />
            </Button>
        </div>
    )
}