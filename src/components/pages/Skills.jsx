import {useEffect, useState} from "react";
import { Skill } from "./";
import { devSkills } from "../../constants/Skills";
const Skills = () => {

   const [javascript, setJavascript] = useState(0);
   const [html, setHtml] = useState(0);
   const [css, setCss] = useState(0);
   const [nodejs, setNodejs] = useState(0);
   const [reactjs, setReactjs] = useState(0);
   const [git, setGit] = useState(0);

   useEffect(() => {
      const timer = setInterval(() => {

         setJavascript(oldProgress => {
            const diff = Math.random() * 10;
            return Math.min(oldProgress + diff, 58);
         });

         setHtml(oldProgress => {
            const diff = Math.random() * 10;
            console.log(diff);
            return Math.min(oldProgress + diff, 90);
         });

         setCss(oldProgress => {
            const diff = Math.random() * 10;
            return Math.min(oldProgress + diff, 74);
         });

         setReactjs(oldProgress => {
            const diff = Math.random() * 10;
            return Math.min(oldProgress + diff, 48);
         });

         setNodejs(oldProgress => {
            const diff = Math.random() * 10;
            return Math.min(oldProgress + diff, 10);
         });

         setGit(oldProgress => {
            const diff = Math.random() * 10;
            return Math.min(oldProgress + diff, 17);
         });

      }, 500);
      return () => {
         clearInterval(timer)
      }
   }, []);

   const { htmlSkill, cssSkill, jsSkill, reactSkill, nodeSkill, gitSkill } = devSkills;

   return(
       <>
          <Skill
              name={htmlSkill.name}
              color={htmlSkill.color}
              icon={htmlSkill.icon}
              value={html}/>
          <Skill
              name={cssSkill.name}
              color={cssSkill.color}
              icon={cssSkill.icon}
              value={css}/>
          <Skill
              name={jsSkill.name}
              color={jsSkill.color}
              icon={jsSkill.icon}
              value={javascript}/>
          <Skill
              name={reactSkill.name}
              color={reactSkill.color}
              icon={reactSkill.icon}
              value={reactjs}/>
          <Skill
              name={nodeSkill.name}
              color={nodeSkill.color}
              icon={nodeSkill.icon}
              value={nodejs}/>
          <Skill
              name={gitSkill.name}
              color={gitSkill.color}
              icon={gitSkill.icon}
              value={git}/>
       </>
   )
}
export default Skills;