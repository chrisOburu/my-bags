import { IconButton} from "@mui/material";
import { AppbarContainer, AppbarHeader } from "../../styles/appbar";
import { Menu, Search} from "@mui/icons-material";
import Actions from "./actions";
import { useUIContext } from "../../context/ui";



export default function AppbarMobile({matches}) {

    const { setDrawerOpen, setShowSearchBox } = useUIContext();
    
    return (
        <AppbarContainer>
            <IconButton onClick={() => setDrawerOpen(true)}>
                <Menu />
            </IconButton>
            <AppbarHeader textAlign={'center'} variant="h4">
                My Bags
            </AppbarHeader>
            <IconButton onClick={() => setShowSearchBox(true)}>
                <Search />
            </IconButton>
            <Actions matches={matches}/>
        </AppbarContainer>
    )
}