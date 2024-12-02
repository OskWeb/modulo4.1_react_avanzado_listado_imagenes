import { Box, Button } from "@mui/material"
import { useContext } from "react";
import { CartContext } from "../core/context/cartContext";

interface dogsPaginationEntity {
    page: number;
}

export const ListPagination: React.FC<dogsPaginationEntity> = ({ page }) => {

    const context = useContext(CartContext);
    const {
        hasMore,
        currentPage,
        setCurrentPage
    } = context;

    const handleNextPage = () => {
        if (hasMore) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (page > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <Box mt={4} display="flex" justifyContent="center" alignItems="center" gap={2}
            sx={{
                position: 'absolute',
                bottom: 20
            }}>
            <Button
                variant="contained"
                color="primary"
                disabled={page === 1} // Deshabilita si estás en la primera página
                onClick={handlePrevPage}
            >
                Anterior
            </Button>
            {
                page > 1 ? (
                    <Button


                        onClick={handlePrevPage}
                    >{page - 1}</Button>
                ) : (
                    ""
                )
            }
            <Button className="pageActive" color="primary" variant="outlined"
                sx={{
                    borderRadius: '50px',
                    width: '36px',

                }}
            >{page}</Button>
            {
                hasMore ? (
                    <Button color="primary"

                        onClick={handleNextPage}
                    >{page + 1}</Button>
                ) : ""
            }
            <Button
                variant="contained"
                color="primary"
                disabled={!hasMore} // Deshabilita si no hay más datos
                onClick={handleNextPage}
            >
                Siguiente
            </Button>
        </Box>
    )
}