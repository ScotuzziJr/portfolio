import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
    palette: {
        primary: {
            main: "#ffeaae",
        },
        secondary: {
            main: "#1c3a13",
        }
    },
    typography: {
        fontFamily: "Helvetica Neue"
    }
})

theme = responsiveFontSizes(theme)

export default theme
