import { TablePagination } from "@mui/material"

interface catsPaginationEntity {
    cats: number;
    pagination: (event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null, pageNumber: number) => void;
    changeRowsPerPage: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    page: number;
    perPage: number;
}

export const ListPaginationCats: React.FC<catsPaginationEntity> = ({ cats, pagination, changeRowsPerPage, page, perPage }) => {
    return (
        <TablePagination
            className="pagination"
            component="div"
            count={cats}
            page={page}
            onPageChange={(event, page) => pagination(event, page)}
            rowsPerPage={perPage}
            onRowsPerPageChange={(event) => changeRowsPerPage(event)}
            rowsPerPageOptions={[5, 10, 15]}
        />
    )
}