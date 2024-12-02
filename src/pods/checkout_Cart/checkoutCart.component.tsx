import { EmptyCart } from "../../common-app/emptyCart"
import { ProductExtended } from "../../common-app/productExtended"
import { PictureInfo } from "../../core/interfaces/PictureInfo"
import { ButtonsNavigation } from "../../common-app/buttonsNavigation"
import { useContext, useState } from "react"
import { CheckoutContext } from "../../core/context/checkoutContext"

export const CheckoutCartComponent = ({ products, setProducts }) => {

    const context = useContext(CheckoutContext);

    const { setFormOk } = context;

    useState(() => {
        setFormOk(true);
    })

    return (

        <div className="checkoutCartBox">
            <div className="step-title">
                <h2>Mi cesta</h2>
            </div>
            {
                products.length > 0 ? (
                    <div className="productsBox">
                        <div className="productsList">
                            {
                                products.map((product: PictureInfo) => (
                                    <ProductExtended product={product} products={products} setProducts={setProducts} />
                                ))
                            }
                        </div>
                        <ButtonsNavigation back={""} next={"/checkout/personal_data"} />
                    </div>
                ) : (
                    <EmptyCart iconSize={80} />
                )
            }
        </div>
    )


}