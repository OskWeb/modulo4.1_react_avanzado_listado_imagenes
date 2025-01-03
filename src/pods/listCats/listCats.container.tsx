import { useContext, useEffect } from "react";
import { ListCatsComponent } from "./listCats.component"
import { fetchDataListCats } from "./listCats.api";
import React from "react";
import { PictureInfo } from "./listCats.vm";
import { CartContext } from "../../core/context/cartContext";

export const ListCatsContainer = () => {

    const [cats, setCats] = React.useState<PictureInfo[]>([]);
    const [fetchOK, setFetchOK] = React.useState<boolean>(false);

    const context = useContext(CartContext);
    const {
        currentPage, setCurrentPage,
        imagesPerPage, setImagesPerPage,
        loadingImages, setLoadingImages,
        totalImages
    } = context;

    useEffect(() => {
        handleFetchData();
    }, [currentPage])

    const handleFetchData = async () => {
        console.log("feching data ----");
        const data = await fetchDataListCats(currentPage, setLoadingImages);

        if (data) {
            setCats(data);
            setFetchOK(true);
        }
    }

    const handlePagination = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, pageNumber: number) => {
        setCurrentPage(pageNumber);
    }

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setImagesPerPage(parseInt(event.target.value, 10));
        setCurrentPage(0);
    }

    return (
        <>
            <ListCatsComponent
                cats={cats}
                fetchOK={fetchOK}
                handlePagination={handlePagination}
                handleChangeRowsPerPage={handleChangeRowsPerPage}
                currentPage={currentPage}
                imagesPerPage={imagesPerPage}
                loadingImages={loadingImages}
                totalImages={totalImages}
            />
        </>
    )
}