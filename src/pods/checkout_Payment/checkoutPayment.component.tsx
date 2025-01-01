import { ButtonsNavigation } from "../../common-app/buttonsNavigation"
import { PictureInfo } from "../../core/interfaces/PictureInfo"
import DownloadIcon from '@mui/icons-material/Download';

export const CheckoutPaymentComponent = ({ products }) => {
    return (
        <div className="checkoutDownloadBox">
            <div className="step-title">
                <h1>Download</h1>
                <span>Abre la imagen y descárgala con las opciones de tu navegador</span>
            </div>
            <div className="downloadBox">
                {
                    products.map((product: PictureInfo) => (
                        <div className="downloadImage">
                            <img src={product.picUrl} alt="" width="100px" />
                            <a href={product.picUrl} target="_blank">Descargar <DownloadIcon /></a>
                        </div>
                    ))
                }
            </div>
            <ButtonsNavigation back={"/checkout/personal_data"} next={""} />
        </div>
    )
}