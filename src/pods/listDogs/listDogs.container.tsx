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
        loadingImages, setLoadingImages,
        totalImages,
        hasMore, setHasMore
    } = context;


    useEffect(() => {
        handleFetchData();
        setHasMore(true);
    }, [currentPage])

    const handleFetchData = async () => {
        const data = await fetchDataListDogs(currentPage, setLoadingImages);

        if (data) {
            setDogs(data);
            setFetchOK(true);
            if (data.length < 10) {
                setHasMore(false);
            }
        }
    }
    const handlePagination = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, pageNumber: number) => {
        setCurrentPage(pageNumber);
    }

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setImagesPerPage(parseInt(event.target.value, 10));
        setCurrentPage(0);
    }

    // const currentDogs = dogs.slice(currentPage * imagesPerPage, currentPage * imagesPerPage + imagesPerPage);

    return (
        <>
            <ListDogsComponent
                dogs={dogs}
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