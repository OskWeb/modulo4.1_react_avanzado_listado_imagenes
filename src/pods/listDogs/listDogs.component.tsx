import { Loading } from "../../common/loading"
import { DogsCard } from "./components/dogsCard.component"
import { ListPagination } from "../../common-app/pagination"
import { PictureInfo } from "./listDogs.vm"

interface data {
    dogs: PictureInfo[],
    fetchOK: boolean,
    handlePagination: (event, pageNumber: number) => void,
    handleChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    currentPage: number,
    imagesPerPage: number,
    loadingImages: boolean,
    totalImages: number,


}

export const ListDogsComponent = ({
    dogs, fetchOK, currentPage, loadingImages
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
                                    dogs.map((dog: PictureInfo, index: number) => (
                                        <DogsCard index={index} dog={dog} />
                                    ))

                                }
                            </div>
                        </div>
                    ) : (
                        ""
                    )
                )
            }
            <ListPagination
                page={currentPage}
            />
        </div>

    )
}