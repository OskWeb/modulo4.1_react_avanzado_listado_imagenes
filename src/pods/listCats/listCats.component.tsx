import { Loading } from "../../common/loading"
import { CatsCard } from "./components/catsCard.component"
import { ListPagination } from "../../common-app/pagination"
import { PictureInfo } from "./listCats.vm"

interface data {
    cats: PictureInfo[],
    fetchOK: boolean,
    handlePagination: (event, pageNumber: number) => void,
    handleChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    currentPage: number,
    imagesPerPage: number,
    loadingImages: boolean,
    totalImages: number
}

export const ListCatsComponent = ({ cats, fetchOK, currentPage, loadingImages }: data) => {
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
                                    cats.map((cat: PictureInfo, index: number) => (
                                        <CatsCard index={index} cat={cat} />
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