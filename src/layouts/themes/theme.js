import {createTheme} from "@mui/material/styles";

//NOTE Create Custom Theme
export const lightTheme = createTheme({
    direction: "ltr",
    palette:{
        mode:"light",
        primary:{
            main:"#8be9fd"
        },
        secondary:{
            main:"#bd93f9"
        }
    },
    typography: {
        fontFamily: "sans-serif",
    },
});
export const darkTheme = createTheme({
    direction: "ltr",
    palette:{
        mode:"dark",
        primary:{
            main:"#8be9fd"
        },
        secondary:{
            main:"#4646cb"
        }
    },
    typography: {
        fontFamily: "sans-serif",
    },
});