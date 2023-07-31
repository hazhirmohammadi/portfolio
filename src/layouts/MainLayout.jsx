import {ThemeProvider} from "@mui/material/styles";
import {theme} from "./themes/theme";
import {Helmet, HelmetProvider} from "react-helmet-async";
import Grid from "@mui/material/Unstable_Grid2";

const MainLayout = ({children}) => {
    return (
        <ThemeProvider theme={theme}>
            <HelmetProvider>

                <Helmet
                >
                    <title>hazhir</title>
                </Helmet>

                {/* Grid System */}
                <Grid sx={{height: "100vh"}} container>
                    {children}
                </Grid>
            </HelmetProvider>
        </ThemeProvider>
    );
};

export default MainLayout;

