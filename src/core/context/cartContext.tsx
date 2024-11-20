import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import React from "react";
import { PictureInfo } from "../interfaces/PictureInfo";


interface ProviderProps {
    children: ReactNode;
}

interface CartContextEntity {
    open: boolean;
    setOpen: ({ }: boolean) => void;
    products: PictureInfo[];
    setProducts: Dispatch<SetStateAction<PictureInfo[]>>;
    currentPage: number;
    setCurrentPage: ({ }: number) => void;
    imagesPerPage: number;
    setImagesPerPage: ({ }: number) => void;
    loadingImages: boolean;
    setLoadingImages: ({ }: boolean) => void;
}

// Valor inicial vacío
const initialContext: CartContextEntity = {
    open: false,
    setOpen: () => { },
    products: [],
    setProducts: () => { },
    currentPage: 0,
    setCurrentPage: () => { },
    imagesPerPage: 10,
    setImagesPerPage: () => { },
    loadingImages: false,
    setLoadingImages: () => { },
};


export const CartContext = createContext<CartContextEntity>(initialContext);

export const CartProvider: React.FC<ProviderProps> = ({ children }) => {
    const [open, setOpen] = useState<boolean>(true);
    const [products, setProducts] = useState<PictureInfo[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(0);
    const [imagesPerPage, setImagesPerPage] = useState<number>(10);
    const [loadingImages, setLoadingImages] = useState<boolean>(false);

    return (
        <CartContext.Provider value={{
            open,
            setOpen,
            products,
            setProducts,
            currentPage,
            setCurrentPage,
            imagesPerPage,
            setImagesPerPage,
            loadingImages,
            setLoadingImages
        }}>
            {children}
        </CartContext.Provider>
    )
}