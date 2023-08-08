import {Avatar, Box, Typography,IconButton} from "@mui/material";
import { RandomReveal} from "react-random-reveal";
import {randomCharacter} from "../../constants/randomCharacter"
import {useState} from "react";
import {GitHub, Telegram, Instagram,} from "@mui/icons-material";
import ThemeActionButton from "../ThemeActionButton";
const SidebarHeader = () => {
   const [start,setStart]=useState(false);

    return(
        <>
           <ThemeActionButton/>
            <Avatar
                src={require("../../assets/profile.jpeg")}
                variant="rounded"
                sx={{
                    height: 200, width: 200, margin: "0 auto",
                    display:{
                        xl: "block",
                        lg: "block",
                        md: "block",
                        sm: "none",
                        xs: "none",

                    },
                }}
            >
                Error
            </Avatar>

            <Typography sx={{textAlign: "center",mt:"3px"}} color="whitesmoke" variant="h6">
               <RandomReveal onComplete={() => setStart(true)} isPlaying characterSet={randomCharacter} characters=" Hazhir mohammadi" duration={4}/>
            </Typography>
           {start &&(
               <Typography sx={{textAlign: "center"}} color="green">
                  <RandomReveal isPlaying characterSet={randomCharacter} characters=" programmer front end ,and react dev" duration={4}/>
               </Typography>
           )}

           <Box component="div" sx={{m:"0 auto",textAlign:"center",}}>
              <IconButton aria-label="Github">
                 <a href="https://github.com/hazhirmohammadi" target="_blank" rel="noopener noreferrer">
                    <GitHub sx={{color:"teal"}}/>
                 </a>
              </IconButton>
              <IconButton aria-label="Telegram">
                 <a href="#" target="_blank" rel="noopener noreferrer">
                    <Telegram sx={{color:"#1f4cd0"}}/>
                 </a>
              </IconButton>
              <IconButton aria-label="Instagram">
                 <a href="#" target="_blank" rel="noopener noreferrer">
                    <Instagram sx={{color:"#9f276e"}}/>
                 </a>
              </IconButton>

           </Box>
        </>
    )
}
export default SidebarHeader;