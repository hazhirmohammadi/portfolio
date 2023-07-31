import {Box, Typography} from "@mui/material";
import React, {useCallback, useEffect, useRef} from "react";
import Particles from "react-particles";
import {loadFull} from "tsparticles"
import Typed from "typed.js";
import {links} from "../constants/particles"

const Home = () => {
   const nameEl = useRef(null);
   const infoEl = useRef(null);

   const strings = [
      "I'm a full stack developer",
      "I am a programming instructor",
      "I'm a freelancer",
      "I am a content creator of the programming world",
   ];

   useEffect(() => {
      const typedName = new Typed(nameEl.current, {
         strings: ["[[Hazhir Mohammadi]]"],
         typeSpeed: 50,
         backSpeed: 20,
         backDelay: 10,
         showCursor: false,
      });

      const typedInfo = new Typed(infoEl.current, {
         strings: strings,
         startDelay: 1300,
         typeSpeed: 80,
         backSpeed: 50,
         backDelay: 50,
         loop: true,
         showCursor: false,
      });

      return () => {
         typedName.destroy();
         typedInfo.destroy();
      };
   }, []);
   const particlesInit = useCallback(async (engine) => {
      await loadFull(engine)
   }, []);

   const particlesLoaded = useCallback(async (container) => {
      await console.log(container)
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
          {/* add Particles */}
          {/*<Particles id="tsparticles" init={particlesInit} loaded={particlesLoaded} options={links}/>*/}

          <Typography ref={nameEl} variant="h4" sx={{textAlign: "center",}} color="tomato">
          </Typography>
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
          </Typography>
       </Box>
   )
};

export default Home;