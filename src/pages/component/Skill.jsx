import {Chip, Divider, Box, Typography, LinearProgress} from "@mui/material";

const Skill = ({icon,color,name,value}) => {
   return(
       <>
          <Divider textAlign="left" sx={{
             "&::before,&::after":{
                borderColor:`${color}.main`
             }
          }}>
             <Chip icon={
                <Box component="img" src={icon} sx={{height:20}}/>
             } color={color} label={name} sx={{color:"#000",p:2,mb:1}}/>
          </Divider>

          <Box sx={{display:"flex", alignItem:"baseline", textAlign:"center"}}>
             <Box sx={{width:"95%",mr:1,mt:"6px"}}>
                <LinearProgress
                    variant="determinate"
                    value={value}
                    color={color}
                    sx={{ height:10,borderRadius:2}}
                />
             </Box>
             <Box sx={{minWidth:35}}>
                <Typography variant="body2" color="black" sx={{textAlign:"center",fontSize:"18px"}}>
                   %{Math.round(value)}
                </Typography>
             </Box>

          </Box>
       </>
   )
}
export default Skill;