
import {useState, useEffect} from "react"
import Grid from "@mui/material/Unstable_Grid2";
import {Box, Typography, Card, CardContent, Divider, Chip, Avatar} from "@mui/material"
import avatar from "../assets/Avatar.jpg"
import {CodeRounded } from '@mui/icons-material';
import DevInfo from "./component/DevInfo";

const About = () => {
   return (
       <Card sx={{height: "100vh", backgroundColor: "whitesmoke"}}>
          <CardContent>
             <Grid container sx={{m: 3}}>
                {/*AVATAR */}
                <Grid xs={0} sm={0} md={4} lg={4} xl={4}>
                   <Avatar
                       src={avatar}
                       variant="rounded"
                       sx={{
                          height: 250,
                          width: 250,
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
                   <Divider textAlign="left">
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
          </CardContent>
       </Card>
   )
};
export default About