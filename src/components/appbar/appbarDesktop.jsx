import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { AppbarContainer, AppbarHeader, MyList } from "../../styles/appbar";
import { Search} from "@mui/icons-material";
import Actions from "./actions";
import { useUIContext } from "../../context/ui";



export default function AppbarDesktop({matches}) {
    const {  setShowSearchBox } = useUIContext();
    return (
        <AppbarContainer>
            <AppbarHeader>
                My Bags
            </AppbarHeader>
            <MyList type="row">
                <ListItemText primary="Home"/>
                <ListItemText primary="Categories"/>
                <ListItemText primary="Products"/>
                <ListItemText primary="Contact Us"/>
                <ListItemButton>
                    <ListItemIcon onClick={() => setShowSearchBox(true)}>
                        <Search />
                    </ListItemIcon>
                </ListItemButton>
                <Actions matches={matches}/>
            </MyList>
        </AppbarContainer>
    )
}