import { Box, Container, ThemeProvider, Typography } from "@mui/material"
import { useEffect } from "react"
import { theme } from "./styles/index"
import Appbar from "./components/appbar";
import Banner from "./components/banner";
import Promotions from "./components/promotions";
import Products from "./components/products/index";
import Footer from "./components/footer";
import AppDrawer from "./components/drawer";
import { UIProvider } from "./context/ui";
import SearchBox from "./components/search";
import Cart from "./components/cart";


function App() {
  useEffect(() => {
    document.title = "Shopping App"
  }, []);


  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl" sx={{ background: "#fff" }} className="pb-5">
        <UIProvider>
          <Appbar />
          <Banner />
          <Promotions />
          <Box className="flex justify-center p-8">
            <Typography variant="h4">Our Products</Typography>
          </Box>
          <Products />
          <AppDrawer /> 
          <Cart />
          <SearchBox />
        </UIProvider>
      </Container>
      <Footer />
    </ThemeProvider>
  )
}

export default App




