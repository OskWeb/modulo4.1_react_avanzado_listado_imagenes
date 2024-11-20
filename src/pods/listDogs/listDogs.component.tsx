import { Loading } from "../../common/loading"
import { DogsCard } from "./components/dogsCard.component"
import { ListPaginationDogs } from "./components/pagination"
import { PictureInfo } from "./listDogs.vm"

interface data {
    dogs: PictureInfo[],
    currentDogs: PictureInfo[],
    fetchOK: boolean,
    handlePagination: (event, pageNumber: number) => void,
    handleChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    currentPage: number,
    imagesPerPage: number,
    loadingImages: boolean
}

export const ListDogsComponent = ({
    dogs, currentDogs, fetchOK, handlePagination, handleChangeRowsPerPage, currentPage, imagesPerPage, loadingImages
}: data) => {
    return (
        <div className="sectionBox">

            {
                loadingImages ? (
                    <Loading />
                ) : (

                    fetchOK ? (
                        <div className="listImagesBox">
                            <div className="listImages">
                                {
                                    currentDogs.map((dog: PictureInfo, index: number) => (
                                        <DogsCard index={index} dog={dog} />
                                    ))

                                }
                            </div>

                            <ListPaginationDogs
                                dogs={dogs.length}
                                pagination={handlePagination}
                                changeRowsPerPage={handleChangeRowsPerPage}
                                page={currentPage}
                                perPage={imagesPerPage}
                            />
                        </div>

                    ) : (
                        ""
                    )
                )
            }



        </div>

    )
}