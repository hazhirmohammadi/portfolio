import { Typography} from "@mui/material";
import MainLayout from "../layouts/MainLayout";
import {Sidebar} from "../components/sidebar";
import PagesContainer from "./PagesContainer";
import Page from "../pages/component/Page";
import SidebarContainer from "./SidebarContainer";
import MainContext from "../context";
import React, {useState} from "react";
import {DrawerActionButton} from "../components/drawer";
import {Home} from "../pages";

// import Bg02 from "../assets/bg02.jpeg"


function App() {

   const [pageNumber, setPageNumber] = useState(0);
   const [drawerOpen, setDrawerOpen] = useState(false);
   const handlePageNumber = (event, newPage) => {
      console.log(newPage);
      setPageNumber(newPage);
   };

   return (
       <MainContext.Provider
           value={{pageNumber, handlePageNumber, drawerOpen, setDrawerOpen}}
       >
          <MainLayout>
             <SidebarContainer>
                <Sidebar />
             </SidebarContainer>
             {/*Fab*/}
             <DrawerActionButton/>

             <PagesContainer>
                <Page pageNumber={pageNumber} index={0}>
                   <Home/>
                </Page>
                <Page pageNumber={pageNumber} index={1}>
                   <Typography variant="h5" sx={{textAlign: "center"}}>
                      About us
                   </Typography>
                </Page>
                <Page pageNumber={pageNumber} index={2}>
                   <Typography variant="h5" sx={{textAlign: "center"}}>
                      My Resume
                   </Typography>
                </Page>
                <Page pageNumber={pageNumber} index={3}>
                   <Typography variant="h5" sx={{textAlign: "center"}}>
                      My project
                   </Typography>
                </Page>
                <Page pageNumber={pageNumber} index={4}>
                   <Typography variant="h5" sx={{textAlign: "center"}}>
                      people comments
                   </Typography>
                </Page>
                <Page pageNumber={pageNumber} index={5}>
                   <Typography variant="h5" sx={{textAlign: "center"}}>
                      Call to me
                   </Typography>
                </Page>
             </PagesContainer>
          </MainLayout>
       </MainContext.Provider>
   );
}

export default App;
