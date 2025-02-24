import { Container, Grid2, useMediaQuery, useTheme } from "@mui/material";
import ProductMobile from "./productMobile";
import ProductDesktop from "./productDesktop";
import AppPagination from "../pagination";
import { useState } from "react";

export default function Products() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const [products, setProducts] = useState([]);
    
    return (
        <>
        
        <Container maxWidth="xl" sx={{background : "#fff"}} className="pb-5">
            <Grid2 container justifyContent={'center'} sx={{margin: "20px 4px 10px 4px"}} spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {products.map((product) => (
                    <Grid2  key={product.id} className="flex items-center flex-col" xs={2} sm={4} md={4} >
                        {matches ? <ProductMobile product={product} matches={matches}/> 
                        : <ProductDesktop product={product} matches={matches}/>}
                    </Grid2>
                ))}
            </Grid2>
            <AppPagination setProducts={(p) => setProducts(p)} />
        </Container>
        </>
    )
}