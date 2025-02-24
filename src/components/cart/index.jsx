import { Avatar, Box, Button, Divider, Drawer, Paper, Typography, useMediaQuery, useTheme } from "@mui/material";
import { colors } from "../../styles";
import { useUIContext } from "../../context/ui";


export default function Cart() {
    const { cart, setShowCart, showCart } = useUIContext();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));

    const cartContent = cart.map(item => (
        <Box key={item.id}>
            <Box className="flex items-start justify-between pt-4 pb-4">
                <Avatar src={item.image} sx={{ width: 96, height: 96, mr: 4 }} />
                <Box className="flex flex-col">
                    <Typography variant="h6">{item.name}</Typography>
                    {!matches && <Typography variant="subtitle2">{item.description}</Typography>}
                </Box>
                <Typography variant="body1" className="justify-end">${item.price}</Typography>
            </Box>
            {matches && <Typography variant="subtitle2">{item.description}</Typography>}
            <Divider variant="fullWidth" />
        </Box>
    ));
    return (
        <Drawer open={showCart} anchor="right"
            onClose={() => setShowCart(false)}
            PaperProps={{
                sx: {
                    width: matches ? "100%" : 500,
                    background: colors.light_gray,
                    borderRadius: 0,
                }
            }}> {cart.length > 0 ?
                <Box className="p-8 flex items-center justify-center flex-col">
                    <Typography variant="h3" color={colors.black}>Your Cart</Typography>
                    <Typography variant="body1" color={colors.muted}>Voluptate Lorem culpa fugiat proident cillum adipisicing id ad tempor.</Typography>
                    <Paper elevation={0} className="w-[90%] mt-4 p-8" >
                        {cartContent}
                    </Paper>
                    <Button variant="contained" color="primary" sx={{ mt: 4 }}>Proceed to paymet</Button>
                </Box>
                :
                <Box className="p-8 flex items-center justify-center flex-col">
                    <Typography variant={matches ? "h5" : "h3"} color={colors.black}>Your Cart is Empty!</Typography>

                </Box>}
                <Button onClick={() => setShowCart(false)}>Close</Button>
        </Drawer>
    )
}