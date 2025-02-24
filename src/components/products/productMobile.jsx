import { Stack } from "@mui/material";
import { Product, ProductActionButton, ProductActionsWrapper, ProductAddToCart, ProductFavButton, ProductImage } from "../../styles/products";
import ProductMeta from "./productMeta";
import { Favorite, FitScreen, Share } from "@mui/icons-material";
import useDialogModal from "../../hooks/useDialogModal";
import ProductDetail from "../productDetail";
import useCart from "../../hooks/useCart";

export default function ProductMobile({ product, matches }) {
    const [ProductDetailDialog, showProductDetailDialog, closeProductDetailDialog] = useDialogModal(ProductDetail);

    const { addToCart, addToCartText } = useCart(product);

    return (
        <>
            <Product>
                <ProductImage src={product.image} />
                <ProductMeta product={product} matches={matches} />
                <ProductActionsWrapper>
                    <Stack direction="row">
                        <ProductFavButton isfav={0}>
                            <Favorite />
                        </ProductFavButton>
                        <ProductActionButton>
                            <Share color="primary" />
                        </ProductActionButton>
                        <ProductActionButton onClick={showProductDetailDialog}>
                            <FitScreen color="primary" />
                        </ProductActionButton>
                    </Stack>
                </ProductActionsWrapper>
            </Product>
            <ProductAddToCart variant="contained" onClick={addToCart}>{addToCartText}</ProductAddToCart>
            <ProductDetailDialog product={product} />
        </>
    );
}