import { TablePagination } from "@mui/material"

interface dogsPaginationEntity {
    dogs: number;
    pagination: (event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null, pageNumber: number) => void;
    changeRowsPerPage: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    page: number;
    perPage: number;
}

export const ListPaginationDogs: React.FC<dogsPaginationEntity> = ({ dogs, pagination, changeRowsPerPage, page, perPage }) => {
    return (
        <TablePagination
            className="pagination"
            component="div"
            count={dogs}
            page={page}
            onPageChange={(event, page) => pagination(event, page)}
            rowsPerPage={perPage}
            onRowsPerPageChange={(event) => changeRowsPerPage(event)}
            rowsPerPageOptions={[5, 10, 15]}
        />
    )
}