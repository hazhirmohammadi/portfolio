import {Typography, useTheme, useMediaQuery} from "@mui/material";
import MainLayout from "../layouts/MainLayout";
import {Sidebar} from "../components/sidebar";
import PagesContainer from "./PagesContainer";
import Page from "../pages/component/Page";
import SidebarContainer from "./SidebarContainer";
import MainContext from "../context";
import React, {useEffect, useState} from "react";
import {DrawerActionButton} from "../components/drawer";
import {About, Home, Resume} from "../pages";


// import Bg02 from "../assets/bg02.jpeg"


function App() {

   const [pageNumber, setPageNumber] = useState(0);
   const [drawerOpen, setDrawerOpen] = useState(false);
   const theme = useTheme();
   const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

   useEffect(() => {
      if(isMdUp){
         setDrawerOpen(false);
      }
   },[isMdUp]);
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
                <Sidebar/>
             </SidebarContainer>
             {/*Fab*/}
             <DrawerActionButton/>

             <PagesContainer>
                <Page pageNumber={pageNumber} index={0}>
                   <Home helmetTitle="protfolio| Home 🏠"/>
                </Page>
                <Page pageNumber={pageNumber} index={1}>
                      <About helmetTitle="protfolio|My About 💁"/>
                </Page>
                <Page pageNumber={pageNumber} index={2}>
                   <Resume helmetTitle="protfolio|My Resume 📑"/>
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
