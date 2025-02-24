import { Box, styled } from "@mui/material";
import { colors } from ".";


export const PromotionsContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    padding: '20px 0px',
    background: colors.secondary,
    [theme.breakpoints.up('md')]: {
        padding: '40px 0px',
    }
}))

export const MessageText = styled(Box)(({ theme }) => ({
    fontFamily: '"Montez", "cursive"',
    fontSize: '1.5rem',
    color: colors.white,
    [theme.breakpoints.up('md')]: {
        fontSize: '3rem',
    }
}
))