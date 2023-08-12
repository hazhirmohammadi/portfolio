import {Box, Typography} from "@mui/material";
import React, { useEffect, useRef, useState} from "react";
import Typed from "typed.js";
import TextTransition, {presets} from "react-text-transition"
import {Helmet} from "react-helmet-async";
// import {links} from "../constants/particles"
// import Particles from "react-particles";

const Home = ({helmetTitle}) => {
   const [index, setIndex] = useState(0);
   const nameEl = useRef(null);
   const infoEl = useRef(null);

   const strings = [
      " full stack developer",
      " programming instructor",
      " freelancer",
      " content creator of the programming world",
   ];

   useEffect(() => {
      const typedName = new Typed(nameEl.current, {
         strings: ["Hazhir Mohammadi"],
         typeSpeed: 50,
         backSpeed: 20,
         backDelay: 10,
         showCursor: false,
      });
      const stringsTransition = setInterval(() => {
         setIndex(index => index + 1);
      }, 3000);


      return () => {
         typedName.destroy();
         clearInterval(stringsTransition);
      };
   }, []);

   return (
       <Box
           sx={{
              backgroundImage: `url(${require("../assets/bg55.jpg")})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              height: "100vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
           }}
       >
          <Helmet>
             <title>{helmetTitle}</title>
          </Helmet>
          {/* add Particles */}
          {/*<Particles id="tsparticles" init={particlesInit} loaded={particlesLoaded} options={links}/>*/}
          <Box component="div" sx={{display:"flex"}}>
             <Typography variant="h3" color="#F93C92">
                {"{{"}
             </Typography>

             <Typography ref={nameEl} variant="h4" sx={{textAlign: "center",}} color="tomato"></Typography>

             <Typography variant="h3" color="#F93C92">
                {"}}"}
             </Typography>
          </Box>

          <Box component="div" sx={{display: "flex"}}>
             <Typography variant="h5" color="whitesmoke"
                         sx={{
                            textAlign: "center",
                            backgroundColor: "rgba(21,20,20,0.69)",
                            borderRadius: "4px",
                            mr: 1
                         }}>
                I am a
             </Typography>
             <TextTransition springConfig={presets.wobbly}>
                <Typography
                    ref={infoEl}
                    variant="h5"
                    sx={{
                       textAlign: "center", textDecoration: "underline",
                       textDecorationColor: "#7be114",
                       backgroundColor: "rgba(21,20,20,0.69)",
                       borderRadius: "4px"
                    }}
                    color="whitesmoke"
                >
                   {strings[index % strings.length]}
                </Typography>
             </TextTransition>

          </Box>

       </Box>
   )
};

export default Home;