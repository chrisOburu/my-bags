import { styled, TextField, Typography } from "@mui/material";
import { colors } from "./index";


export const FooterTitle = styled(Typography)(() => ({
    textTransform: 'uppercase',
    marginBottom: '1em'
}))

export const SubscribeTf = styled(TextField)(() => ({
    ".MuiInputLabel-root": {
      color: colors.secondary,
    },
  
    ".MuiInput-root::before": {
      borderBottom: `1px solid ${colors.secondary}`,
    },
  }));