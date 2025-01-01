import { Button } from "@mui/material"
import { PictureInfo } from "../core/interfaces/PictureInfo"
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

interface ProductEntity {
    product: PictureInfo,
    products: PictureInfo[],
    setProducts: (products: PictureInfo[]) => void
}

export const ProductExtended: React.FC<ProductEntity> = ({ product, products, setProducts }) => {

    const deleteProduct = () => {
        setProducts(
            products.filter(a => a.id !== product.id)
        );
    }

    return (
        <div className="cartProductExtended">
            <div className="contentBox">
                <div className="left-content">
                    <img src={product.picUrl} alt="" width="100px" />
                </div>
                <div className="right-content">
                    <h4 className="title">{product.title}</h4>
                    <div className="info">
                        <li className="temperament">{product.temperament}</li>
                        {
                            product.description && (
                                <li className="description">{product.description}</li>
                            )
                        }
                    </div>
                </div>
            </div>
            <Button onClick={() => deleteProduct()}>
                <DeleteForeverOutlinedIcon />
            </Button>
        </div>
    )
}