import { ButtonsNavigation } from "../../common-app/buttonsNavigation"
import { PictureInfo } from "../../core/interfaces/PictureInfo"
import { saveAs } from 'file-saver';
import DownloadIcon from '@mui/icons-material/Download';

export const CheckoutPaymentComponent = ({ products }) => {

    const downloadImage = async (imgUrl: string) => {
        saveAs(imgUrl, "img.jpg");
    }

    return (
        <div className="checkoutDownloadBox">
            <div className="step-title">
                <h1>Download</h1>
                <span>Abre la imagen y descargala con las opciones de tu navegador</span>
            </div>

            <div className="downloadBox">
                {
                    products.map((product: PictureInfo) => (
                        <div className="downloadImage">
                            <img src={product.picUrl} alt="" width="100px" />
                            <button onClick={() => downloadImage(product.picUrl)}>Descargar <DownloadIcon /></button>
                        </div>
                    ))
                }
            </div>


            <ButtonsNavigation back={"/checkout/personal_data"} next={""} />

        </div>
    )
}