import { Box, Dialog, DialogContent, DialogTitle, IconButton, Slide, styled, Typography, useMediaQuery, useTheme } from "@mui/material";
import { colors } from "../../styles";
import { Close } from "@mui/icons-material";
import { Product, ProductImage } from "../../styles/products";

function SlideTransition(props) {
    return <Slide {...props} direction="down" />;
}

const ProductDetailWrapper = styled(Box)(({theme}) => ({   
    display: 'flex',
    padding: theme.spacing(2),
    
}));

const ProductDetailInfoWrapper = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 500,
    lineHeight: '1.5',
}));
export default function ProductDetail({ open, onClose, product }) {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <Dialog transition={SlideTransition} variant="permanent" open={open} fullScreen>
            <DialogTitle sx={{ background: colors.secondary }}>
                <Box className="flex justify-between items-center">
                    Product Title
                    <IconButton onClick={onClose}>
                        <Close />
                    </IconButton>
                </Box>
            </DialogTitle>
            <DialogContent>
                <ProductDetailInfoWrapper flexDirection={matches ? 'row' : 'column'}>
                    <Product sx={{mr: 4}}>
                        <ProductImage src={product.image} />
                    </Product>
                </ProductDetailInfoWrapper>
                <ProductDetailInfoWrapper>
                    <Typography variant="subtitle1">{product.title}</Typography>
                    <Typography variant="h5">{product.title}</Typography>
                    <Typography variant="h5">{product.title}</Typography>
                    <Typography variant="h5">{product.title}</Typography>
                </ProductDetailInfoWrapper>
                
            </DialogContent>
        </Dialog>
    );
}