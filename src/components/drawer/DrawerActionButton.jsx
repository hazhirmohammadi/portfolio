import {Box, Fab} from "@mui/material";
import {cyan} from "@mui/material/colors";
import {MenuRounded} from "@mui/icons-material";
import {useContext} from "react";
import MainContext from "../../context";
const DrawerActionButton = () => {
   const { setDrawerOpen } = useContext(MainContext);
    return(
        <>
            <Box
                sx={{
                    display: {
                       position:"absolute",
                        xs: "block",
                        sm: "block",
                        md: "none",
                        lg: "none",
                        xl: "none",
                    },
                }}
            >
                <Fab
                    aria-label="Sidebar"
                    size="small"
                    onClick={() => setDrawerOpen(true)}
                    sx={{ backgroundColor: cyan[500], m: 2 }}
                >
                    <MenuRounded />
                </Fab>
            </Box>
        </>
    )
}
export default DrawerActionButton;