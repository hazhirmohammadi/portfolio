
import Grid from "@mui/material/Unstable_Grid2";
import { Typography, Card, CardContent, Divider, Chip, Avatar} from "@mui/material"
import avatar from "../assets/Avatar.jpg"
import {CodeRounded ,StarsRounded} from '@mui/icons-material';
import DevInfo from "./component/DevInfo";
import Skill from "./component/Skill";
import {devSkills} from "../constants/Skills"
const About = () => {
   const {htmlSkill,cssSkill,jsSkill,reactSkill,nodeSkill,gitSkill}=devSkills;
   return (
       <>
       <Card sx={{height: "1500px", backgroundColor: "rgb(95,98,117)" ,overflowY:"inbound"}}>
          <CardContent>
             <Grid container sx={{m: 1}}>
                {/*AVATAR */}
                <Grid xs={0} sm={0} md={4} lg={4} xl={4}>
                   <Avatar
                       src={avatar}
                       variant="rounded"
                       sx={{
                          height: 230,
                          width: 230,
                          margin: "0 auto",
                          display: {
                             xl: "block",
                             lg: "block",
                             md: "block",
                             sm: "none",
                             xs: "none"
                          }
                       }}

                   >
                      H M
                   </Avatar>
                </Grid>
                {/*ALERT */}
                <Grid xs={12} sm={12} md={8} lg={8} xl={8}>
                   <Divider textAlign="left" sx={{
                      "&::before,&::after":{
                         borderColor:"#4e7bfc"
                      }
                   }}>
                      <Chip color="primary" sx={{p: 3}} icon={<CodeRounded/>}
                            label={
                               <Typography variant="body1" textAlign="center" color="black">
                                  I'm a full stack developer
                               </Typography>}
                      />
                   </Divider>

                   {/*DEV INFO*/}
                   <DevInfo>name & last Name: Hazhir Mohammadi</DevInfo>
                   <DevInfo>Age: 20</DevInfo>
                   <DevInfo>City: Bukan</DevInfo>
                   <DevInfo>Email: hazhir6690@gmail.com</DevInfo>
                   <DevInfo>Tal: 0905*******</DevInfo>
                </Grid>
             </Grid>
             <Grid container >
                <Grid  sx={{width:1, mt:"3px"}}>
                   <Divider textAlign="center" sx={{
                      "&::before,&::after":{
                         borderColor:"#4e7bfc"
                      }
                   }}>
                      <Chip color="secondary" sx={{p: 3}} icon={<StarsRounded/>}
                            label={
                               <Typography variant="body1" textAlign="center" color="black">
                                 My Skills
                               </Typography>}
                      />
                   </Divider>
                   <Skill
                        name={htmlSkill.name}
                       color={htmlSkill.color}
                        icon={htmlSkill.icon}
                       value={90}/>
                   <Skill
                       name={cssSkill.name}
                       color={cssSkill.color}
                       icon={cssSkill.icon}
                       value={80}/>
                   <Skill
                        name={jsSkill.name}
                       color={jsSkill.color}
                        icon={jsSkill.icon}
                       value={55}/>
                   <Skill
                        name={reactSkill.name}
                       color={reactSkill.color}
                        icon={reactSkill.icon}
                       value={45}/>
                   <Skill
                        name={nodeSkill.name}
                       color={nodeSkill.color}
                        icon={nodeSkill.icon}
                       value={0}/>
                   <Skill
                        name={gitSkill.name}
                       color={gitSkill.color}
                        icon={gitSkill.icon}
                       value={15}/>
                </Grid>
             </Grid>
          </CardContent>
       </Card>
       </>
   )
};
export default About