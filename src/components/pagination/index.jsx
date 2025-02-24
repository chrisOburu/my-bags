import { Box, Pagination } from "@mui/material";
import {  useEffect, useState } from "react";
import service from "../../services";

const pageSize = 3;
export default function AppPagination({setProducts}) {

    const [pagination , setPagination] = useState({
        count : 0,
        from : 0,
        to : pageSize,
    });

    const handlePageChange = (e, page) => {
        const from = (page-1)*pageSize;
        const to = (page - 1)*pageSize + pageSize;
        setPagination({...pagination, from: from, to: to});
    }

    useEffect(() => {
        service.getData({from: pagination.from, to: pagination.to}).then((response) => {
            setPagination({...pagination, count : response.count});
            setProducts(response.data);
        });
      }, [pagination.from, pagination.to]);
    return (
       <Box className="flex justify-center items-center" sx={{margin: "20px 0"}}>
            <Pagination count={Math.ceil(pagination.count/pageSize)} onChange={handlePageChange} color="primary"/>
       </Box>
    )
}