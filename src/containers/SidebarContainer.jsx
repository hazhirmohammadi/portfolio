import Grid from "@mui/material/Unstable_Grid2";
import {green,lightGreen} from "@mui/material/colors";
import {useTheme} from "@mui/material";


const SidebarContainer = ({children}) => {
   const theme = useTheme();
   return (
       <Grid
           xs={0}
           sm={0}
           md={3}
           lg={2}
           xl={2}
           sx={{
              backgroundColor: theme.palette.mode === "dark" ?  lightGreen[900]:green[900],
              height: "100vh",
              overflowY: "auto",
              overflowX: "hidden",
           }}
       >
          {children}
       </Grid>
   );
};

export default SidebarContainer;
