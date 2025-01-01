import { Checkbox } from "@mui/material";
import { PictureInfo } from "../listCats.vm"
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../core/context/cartContext";

interface Data {
    index: number,
    cat: PictureInfo
}

export const CatsCard = ({ cat }: Data) => {

    const context = useContext(CartContext);
    const { products, setProducts, currentPage } = context;
    const [finded, setFinded] = useState<boolean>(false);

    useEffect(() => {
        findIfChecked(cat.id);
    }, [products, currentPage])

    const handleCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {

        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        event.target.checked ? (
            setProducts([...products, {
                id: cat.id,
                picUrl: cat.picUrl,
                title: cat.title,
                temperament: cat.temperament,
                description: cat.description,
                selected: true
            }])
        ) : (
            setProducts(products.filter(p => p.id !== cat.id))
        )
    }

    const findIfChecked = (id: string) => {
        const element = products.filter(product => product.id == id);
        return element.length > 0 ? setFinded(true) : setFinded(false);
    }

    return (
        <div className="card">
            <img src={cat.picUrl} alt="" />
            <div>
                <Checkbox onChange={handleCheckbox} checked={finded} />
                <span>{cat.title}</span>
            </div>
        </div>
    )
}