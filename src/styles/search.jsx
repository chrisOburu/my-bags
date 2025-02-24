import { Box, styled, TextField } from "@mui/material";
import { colors } from ".";
import { BorderBottom } from "@mui/icons-material";


export const SearchContainer = styled(Box)(() => ({
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    zIndex: 1000,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
    opacity: 0.9,
}));

export const SearchField = styled(TextField)(({theme}) => ({ 
    ".MuiInputLabel-root": {
        color: colors.secondary,
    },

    ".MuiInput-root": {
        fontSize : '1rem',
        [theme.breakpoints.up('md')]: {
            fontSize: '2rem'
        },
        color: colors.secondary,
    },
    ".MuiInput-root::before": {
        BorderBottom: `1px solid ${colors.secondary}`,
    },
    padding: '0 0 0 40px'

}));  


