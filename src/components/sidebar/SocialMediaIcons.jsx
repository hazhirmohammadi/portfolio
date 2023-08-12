import {Box, IconButton} from "@mui/material";
import {GitHub, Instagram, Telegram} from "@mui/icons-material";

const SocialMediaIcons = () => {
   return(
       <>
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
};
 export default SocialMediaIcons;