import { Loading } from "../../common/loading"
import { CatsCard } from "./components/catsCard.component"
import { ListPaginationCats } from "./components/pagination"
import { PictureInfo } from "./listCats.vm"

interface data {
    cats: PictureInfo[],
    currentCats: PictureInfo[],
    fetchOK: boolean,
    handlePagination: (event, pageNumber: number) => void,
    handleChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    currentPage: number,
    imagesPerPage: number,
    loadingImages: boolean
}

export const ListCatsComponent = ({ cats, currentCats, fetchOK, handlePagination, handleChangeRowsPerPage, currentPage, imagesPerPage, loadingImages }: data) => {
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
                                    currentCats.map((cat: PictureInfo, index: number) => (
                                        <CatsCard index={index} cat={cat} />
                                    ))

                                }
                            </div>

                            <ListPaginationCats
                                cats={cats.length}
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