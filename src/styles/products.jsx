import { Box, Button, IconButton, styled } from "@mui/material";
import { colors } from ".";
import { slideInBottom, slideInRight } from "../animation";

export const Product = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.up('md')]: {
        position : 'relative',
        
    }
}))


export const ProductImage = styled('img')(({ src, theme }) => ({
    src: `url(${src})`,
    width: '400px',
    aspectRatio: '4 / 5',
    background: colors.light_gray,
    padding: '10px', //change accordingly
    [theme.breakpoints.down('md')]: {
        width: '200px',
        padding: '24px'
    }
}))

export const ProductActionButton = styled(IconButton)(() => ({
    background: colors.white,
    margin: 4
}))


export const ProductFavButton = styled(ProductActionButton)(({isfav, theme} ) => ({
    color: isfav ? colors.primary : colors.light,
    [theme.breakpoints.up('md')]: {
        position : 'absolute',
        top: 0,
        right: 0        
    }
}))

export const ProductAddToCart = styled(Button)(({show, theme}) => ({
    width: '120px',
    fontSize: '12px',
    opacity: '0.9',
    background: colors.primary,
    [theme.breakpoints.up('md')]: {
        position : 'absolute',
        bottom: '2%',
        width: '300px',
        padding: '10px 50px',
        animation: show ? `${slideInBottom} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both` : 'none'
    }
}))

export const ProductMetaWrapper = styled(Box)(() => ({
    padding: '4px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
}))


    

export const ProductActionsWrapper = styled(Box)(({ show, theme }) => ({ 
    [theme.breakpoints.up("md")]: {
      display: show ? 'visible' : 'none',
      position: "absolute",
      right: 0,
      top: '20%',
      animation: show ? `${slideInRight} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both` : 'none',
    }
  }));
