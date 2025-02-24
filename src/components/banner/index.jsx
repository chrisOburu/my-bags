import { Typography, useMediaQuery, useTheme } from "@mui/material"
import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerShopButton, BannerTittle } from "../../styles/banner";


export default function Banner() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <BannerContainer>
            <BannerImage src="images\banner.png"/>
           <BannerContent>
                <Typography variant="h6">Huge Collection</Typography>
                <BannerTittle variant="h2">New Bags</BannerTittle>
                <BannerDescription variant="subtitle">Non anim est reprehenderit officia. Non aliqua magna culpa in aliquip reprehenderit incididunt sint Lorem enim aliquip labore aliqua. Commodo qui sit exercitation nostrud ut ullamco mollit esse.</BannerDescription>  
                <BannerShopButton variant="contained">Shop Now</BannerShopButton>        
           </BannerContent>
        </BannerContainer>
    )
}