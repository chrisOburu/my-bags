import { Typography } from "@mui/material";
import { ProductMetaWrapper } from "../../styles/products";


export default function ProductMeta({product, matches}) {
    return (
        <ProductMetaWrapper>
           <Typography variant= {matches ? "h5" : "h6"} lineHeight={2}>{product.name}</Typography>
           <Typography variant= {matches ? "caption" : "body1"} >${product.price}</Typography>
        </ProductMetaWrapper>
    )
}