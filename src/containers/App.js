import {Typography, useTheme, useMediaQuery} from "@mui/material";
import MainLayout from "../layouts/MainLayout";
import {Sidebar} from "../components/sidebar";
import PagesContainer from "./PagesContainer";
import Page from "../pages/component/Page";
import SidebarContainer from "./SidebarContainer";
import MainContext from "../context";
import React, {useEffect, useState} from "react";
import {DrawerActionButton} from "../components/drawer";
import {About, Home, Resume, Courses, Comment, Contact} from "../pages";


// import Bg02 from "../assets/bg02.jpeg"

function App() {
   const [pageNumber, setPageNumber] = useState(0);
   const [drawerOpen, setDrawerOpen] = useState(false);
   const [mode, setMode] = useState();

   const theme = useTheme();
   const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
   const prefersDarkMode = useMediaQuery('(prefers-color-scheme:dark');

   useEffect(() => {
      //Theme System clint
      setMode(prefersDarkMode ? "dark" : "light");

   }, []);

   useEffect(() => {
      if (isMdUp) {
         setDrawerOpen(false);
      }
   }, [isMdUp]);

   const handlePageNumber = (event, newPage) => {
      setPageNumber(newPage);
   };

   const handleThemeChange = () => {
      setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
   };

   return (
       <MainContext.Provider
           value={{
              pageNumber,
              handlePageNumber,
              handleThemeChange,
              drawerOpen,
              setDrawerOpen,
           }}
       >
          <MainLayout mode={mode}>
             <SidebarContainer>
                <Sidebar/>
             </SidebarContainer>
             <DrawerActionButton/>
             <PagesContainer>
                <Page pageNumber={pageNumber} index={0}>
                   <Home helmetTitle="protfolio| Home 🏠"/>
                </Page>
                <Page pageNumber={pageNumber} index={1}>
                   <About helmetTitle="protfolio| My About 💁"/>
                </Page>
                <Page pageNumber={pageNumber} index={2}>
                   <Resume helmetTitle="protfolio| My Resume 📑"/>
                </Page>
                <Page pageNumber={pageNumber} index={3}>
                   <Courses helmetTitle="protfolio| My Project 💻"/>
                </Page>
                <Page pageNumber={pageNumber} index={4}>
                   <Comment helmetTitle="protfolio| comments👥"/>
                </Page>
                <Page pageNumber={pageNumber} index={5}>
                   <Contact helmetTitle="protfolio| contact with me 🗣"/>
                </Page>
             </PagesContainer>
          </MainLayout>
       </MainContext.Provider>
   );
}

export default App;
