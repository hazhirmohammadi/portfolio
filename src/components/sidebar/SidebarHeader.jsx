import {Typography} from "@mui/material";
import {RandomReveal} from "react-random-reveal";
import {randomCharacter} from "../../constants/randomCharacter"
import {useState} from "react";
import ThemeActionButton from "../ThemeActionButton";
import {CustomAvatar} from "../common/";
import avatar from "../../assets/profile.jpeg"
import SocialMediaIcons from "./SocialMediaIcons";

const SidebarHeader = () => {
   const [start, setStart] = useState(false);

   return (
       <>
          <ThemeActionButton/>

          <CustomAvatar avatar={avatar} size={200} fallback="ER"/>

          <Typography sx={{textAlign: "center", mt: "3px"}} color="whitesmoke" variant="h6">
             <RandomReveal onComplete={() => setStart(true)} isPlaying characterSet={randomCharacter}
                           characters=" Hazhir mohammadi" duration={4}/>
          </Typography>
          {start && (
              <Typography sx={{textAlign: "center"}} color="green">
                 <RandomReveal isPlaying characterSet={randomCharacter}
                               characters=" programmer front end ,and react dev" duration={4}/>
              </Typography>
          )}
          <SocialMediaIcons/>
       </>
   )
}
export default SidebarHeader;