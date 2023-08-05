import { Box, Divider} from "@mui/material";
import {grey, cyan} from "@mui/material/colors";
import {SidebarTabs,SidebarHeader,SidebarFooter} from "./index";
const  SidebarContent = () => {

    return (
        <Box
            sx={{
                justifyContent: "center",
                textAlign: "center",
                mt: 2,
            }}
        >

                   <SidebarHeader/>
            <Divider variant="middle" color={cyan[800]} />

                   <SidebarTabs/>
            <Divider variant="middle" color={grey[900]} sx={{ mt: 2 }} />

                   <SidebarFooter/>

        </Box>
    );
};

export default SidebarContent;