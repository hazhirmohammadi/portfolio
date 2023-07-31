import {Tab, Tabs,} from "@mui/material";
import {teal} from "@mui/material/colors";

import MainContext from "../../context";
import {useContext} from "react";
import {tabsData} from "../../data/tabsData.sidebar";

const SidebarTabs = () => {
   const { pageNumber, handlePageNumber, setDrawerOpen } =
       useContext(MainContext);

    const data = tabsData();

    return (
        <Tabs
            orientation="vertical"
            variant="scrollable"
            scrollButton="auto"
            allowScrollButtonsMobile
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
                       backgroundColor: teal[800],
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