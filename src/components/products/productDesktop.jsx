import { Stack } from "@mui/material";
import { Product, ProductActionButton, ProductActionsWrapper, ProductAddToCart, ProductFavButton, ProductImage } from "../../styles/products";
import ProductMeta from "./productMeta";
import { Favorite, FitScreen, Share } from "@mui/icons-material";
import { useState } from "react";
import useDialogModal from "../../hooks/useDialogModal";
import ProductDetail from "../productDetail";
import useCart from "../../hooks/useCart";

export default function ProductDesktop({ product, matches }) {
    const [showOptions, setShowOptions] = useState(false);
    const [ProductDetailDialog, showProductDetailDialog, closeProductDetailDialog] = useDialogModal(ProductDetail);
    const { addToCart, addToCartText } = useCart(product);

    const handleMouseEnter = () => {
        setShowOptions(true);
    }

    const handleMouseLeave = () => {
        setShowOptions(false);
    }

    return (
        <>
            <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <ProductImage src={product.image} />
                <ProductFavButton isfav={0}>
                    <Favorite />
                </ProductFavButton>
                {showOptions && <ProductAddToCart variant="contained" show={showOptions} onClick={addToCart} >
                    {addToCartText}
                </ProductAddToCart>}
                <ProductActionsWrapper show={showOptions}>
                    <Stack direction="column" >
                        <ProductActionButton>
                            <Share color="primary" />
                        </ProductActionButton>
                        <ProductActionButton onClick={showProductDetailDialog}>
                            <FitScreen color="primary" />
                        </ProductActionButton>
                    </Stack>
                </ProductActionsWrapper>
            </Product>
            <ProductMeta product={product} matches={matches} />
            <ProductDetailDialog product={product} />
        </>
    )
}