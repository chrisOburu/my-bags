import { IconButton, Slide } from "@mui/material";
import { useUIContext } from "../../context/ui";
import { SearchContainer, SearchField } from "../../styles/search";
import { Close, Search } from "@mui/icons-material";


export default function SearchBox() {
    const { showSearchBox, setShowSearchBox } = useUIContext()
    return (
        <Slide direction="down" in={showSearchBox} timeout={500}>
            <SearchContainer onClick={() => setShowSearchBox(false)}>
                <SearchField color="secondary" variant="standard" fullWidth placeholder="search..." />
                <IconButton>
                    <Search sx={{ fontSize: { xs: '2em', md: '3em' } }} color='secondary' />
                </IconButton>
                <IconButton
                    sx={{ position: 'absolute', top: 0, right: 10 }}
                    onClick={() => setShowSearchBox(false)}
                >
                    <Close sx={{ fontSize: '4em'}} color='secondary' />
                </IconButton>
            </SearchContainer>
        </Slide>
    )
}