import { useContext, useEffect } from "react";
import { fetchDataListDogs } from "./listDogs.api"
import { ListDogsComponent } from "./listDogs.component"
import { PictureInfo } from "./listDogs.vm";
import React from "react";
import { CartContext } from "../../core/context/cartContext";

export const ListDogsContainer: React.FC = () => {

    const [dogs, setDogs] = React.useState<PictureInfo[]>([]);
    const [fetchOK, setFetchOK] = React.useState<boolean>(false);

    const context = useContext(CartContext);
    const {
        currentPage, setCurrentPage,
        imagesPerPage, setImagesPerPage,
        loadingImages, setLoadingImages
    } = context;

    useEffect(() => {
        handleFetchData();
        console.log("--inicio componente--");
    }, [])

    const handleFetchData = async () => {
        const data = await fetchDataListDogs(currentPage, setLoadingImages);

        if (data) {
            setDogs(data);
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

    const currentDogs = dogs.slice(currentPage * imagesPerPage, currentPage * imagesPerPage + imagesPerPage);

    return (
        <>
            <ListDogsComponent
                dogs={dogs}
                currentDogs={currentDogs}
                fetchOK={fetchOK}
                handlePagination={handlePagination}
                handleChangeRowsPerPage={handleChangeRowsPerPage}
                currentPage={currentPage}
                imagesPerPage={imagesPerPage}
                loadingImages={loadingImages}
            />
        </>
    )
}