import {PlayArrowRounded} from "@mui/icons-material";
import {Typography} from "@mui/material";

const DevInfo = ({children}) => {
   return(
       <Typography
           variant="body1"
           color="black"
           textAlign="left"
           sx={{mt: 2,alignItems:"center"}}
       >
          <PlayArrowRounded fontSize={"medium"} sx={{verticalAlign:"bottom",color:"teal"}}/>
          {children}
       </Typography>
   )
}
export default DevInfo;