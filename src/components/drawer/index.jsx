import { Divider, Drawer, List, ListItemButton, ListItemText } from "@mui/material";
import { DrawerCloseButton } from "../../styles/appbar";
import { Close } from "@mui/icons-material";
import { colors } from "../../styles";
import { lighten } from "polished";
import { useUIContext } from "../../context/ui";


export default function AppDrawer() {
    const { drawerOpen, setDrawerOpen } = useUIContext();
    return (
        <>
            {drawerOpen && (
                <DrawerCloseButton onClick={() => setDrawerOpen(false)}>
                    <Close sx={{ color: lighten(0.09, colors.black), fontSize: '2.5rem' }} />
                </DrawerCloseButton>
            )}
            <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                <List>
                    <ListItemButton>
                        <ListItemText>Home</ListItemText>
                    </ListItemButton>
                    <Divider variant="middle" />
                    <ListItemButton>
                        <ListItemText>Categories</ListItemText>
                    </ListItemButton>
                    <Divider variant="middle" />
                    <ListItemButton>
                        <ListItemText>Products</ListItemText>
                    </ListItemButton>
                    <Divider variant="middle" />
                    <ListItemButton>
                        <ListItemText>About Us</ListItemText>
                    </ListItemButton>
                    <Divider variant="middle" />
                    <ListItemButton>
                        <ListItemText>Contact Us</ListItemText>
                    </ListItemButton>
                </List>
            </Drawer>
        </>
    )
}