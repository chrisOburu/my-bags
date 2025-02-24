import { Box, IconButton, List, styled, Typography } from "@mui/material"
import { colors } from "./index"
import "@fontsource/montez"



export const AppbarContainer = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2px 8px',
    marginTop: '4px'
}))


export const AppbarHeader = styled(Typography)(() => ({
    padding: '4px',
    fontSize: '4em',
    color: colors.secondary,
    fontFamily: '"Montez", "cursive"',
    flexGrow: 1
}))
    

export const MyList = styled(List)(({ type }) => ({
    display: type === 'row' ? 'flex' : 'block',
    flexGrow: 3,
    justifyContent: 'center',
    alignItems: 'center'    
}))

export const ActionsIconsContainerMobile = styled(Box)(() => ({
    display: 'flex',
    background: colors.shaft,
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    zIndex: 99,
    borderTop: `1px solid ${colors.border}`,
    alignItems: 'center'    
}))

export const ActionsIconsContainerDesktop = styled(Box)(() => ({
    flexGrow: 0,    
}))
   
export const DrawerCloseButton = styled(IconButton)(() => ({
    position: 'absolute',
    top: '10px',
    left: '250px',
    zIndex: 199
}))