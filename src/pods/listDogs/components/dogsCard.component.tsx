import { Checkbox } from "@mui/material";
import { PictureInfo } from "../listDogs.vm"
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../core/context/cartContext";

interface Data {
    index: number,
    dog: PictureInfo
}
export const DogsCard = ({ index, dog }: Data) => {

    const context = useContext(CartContext);
    const { products, setProducts, currentPage } = context;
    const [finded, setFinded] = useState<boolean>(false);

    useEffect(() => {
        findIfChecked(dog.id);
    }, [products, currentPage])

    const handleCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {

        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        event.target.checked ? (
            setProducts([...products, {
                id: dog.id,
                picUrl: dog.picUrl,
                title: dog.title,
                temperament: dog.temperament,
                description: dog.description,
                selected: true
            }])
        ) : (

            setProducts(products.filter(p => p.id !== dog.id))
        )

        console.log("perro: " + event.target.checked);

    }

    const findIfChecked = (id: string) => {
        const element = products.filter(product => product.id == id);
        return element.length > 0 ? setFinded(true) : setFinded(false);
    }

    return (

        <div className="card">
            <img src={dog.picUrl} alt="" />
            <div>
                <Checkbox onChange={handleCheckbox} checked={finded} />
                <span>{dog.title}</span>
            </div>
        </div>





    )
}