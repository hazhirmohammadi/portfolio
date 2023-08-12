import {Tab, Tabs, useTheme,} from "@mui/material";
import {indigo, teal} from "@mui/material/colors";

import MainContext from "../../context";
import {useContext} from "react";
import {tabsData} from "../../constants/tabsData.sidebar";

const SidebarTabs = () => {
   const theme=useTheme();
   const { pageNumber, handlePageNumber, setDrawerOpen } =
       useContext(MainContext);

    const data = tabsData();

    return (
        <Tabs
            orientation="vertical"
            variant="scrollable"
            scrollButton="auto"
            allowScrollButtonsMobile
            indicatorColor="green"
            value={pageNumber}
            onChange={handlePageNumber}
        >
            {data.map((tab, index) => (
                <Tab
                    key={index}
                    label={tab.label}
                    icon={tab.icon}
                    iconPosition="start"
                    sx={{
                       backgroundColor: theme.palette.mode==="dark"?teal[800]:indigo[400],
                       borderRadius: 3,
                       my: 0.5,
                       mx: 1,
                       "&.MuiTab-root": {
                          minHeight: 50,
                       }
                    }}
                    onClick={() => setDrawerOpen(false)}
                    {...tab}
                />
            ))}
        </Tabs>
    );
};

export default SidebarTabs;