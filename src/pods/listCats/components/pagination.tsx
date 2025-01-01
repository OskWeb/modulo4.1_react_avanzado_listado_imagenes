import { Pagination } from "@mui/material"

interface catsPaginationEntity {
    cats: number;
    pagination: (event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null, pageNumber: number) => void;
    changeRowsPerPage: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    page: number;
    perPage: number;
}

export const ListPaginationCats: React.FC<catsPaginationEntity> = ({ cats, pagination, page }) => {
    return (
        <Pagination className="pagination" count={cats} page={page} onChange={(event, page) => pagination(event, page)} />
    )
}