import { Badge, Divider, ListItemButton, ListItemIcon } from "@mui/material";
import { Favorite, Person, ShoppingCart } from "@mui/icons-material";
import { ActionsIconsContainerDesktop, ActionsIconsContainerMobile, MyList } from "../../styles/appbar";
import { colors } from "../../styles";
import { useUIContext } from "../../context/ui";


export default function Actions({ matches }) {
    const { cart, setShowCart } = useUIContext();
    const Component = matches ? ActionsIconsContainerMobile : ActionsIconsContainerDesktop
    return (
        <Component>
            <MyList type="row">
                <ListItemButton className="justify-center">
                    <ListItemIcon sx={{ color: matches && colors.secondary, display: 'flex', justifyContent: 'center' }}>
                        <Badge badgeContent={cart && cart.length} color="secondary">
                            <ShoppingCart onClick={() => setShowCart(true)}/>
                        </Badge>
                    </ListItemIcon>
                </ListItemButton>
                <Divider orientation="vertical" flexItem />
                <ListItemButton className="justify-center">
                    <ListItemIcon sx={{ color: matches && colors.secondary, display: 'flex', justifyContent: 'center' }}>
                        <Favorite />
                    </ListItemIcon>
                </ListItemButton>
                <Divider orientation="vertical" flexItem />
                <ListItemButton className="justify-center">
                    <ListItemIcon sx={{ color: matches && colors.secondary, display: 'flex', justifyContent: 'center' }}>
                        <Person />
                    </ListItemIcon>
                </ListItemButton>
                <Divider orientation="vertical" flexItem />
            </MyList>
        </Component>
    )
}