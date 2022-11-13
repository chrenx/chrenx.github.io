import React from 'react';
import IconLink from "./IconLink";
import {Box} from "@mui/material";

function PortfolioBlock(props) {
   const {live, source, title, description} = props;
   if (source !== "None") {
      return (
         <div>
            <div style={{fontSize: "20px"}}>{title}</div>
            <div style={{marginTop: "1rem", marginBottom: "1rem"}}>
               <a href={live} target={"_blank"} rel="noopener noreferrer" style={{border: "2px solid", borderRadius: "25px", padding: "5px", marginRight: "5px"}}>
                  <i className={'fa fa-safari'}/> Live Demo
               </a>
               <a href={source} target={"_blank"} rel="noopener noreferrer" style={{border: "2px solid", borderRadius: "25px", padding: "5px"}}>
                  <i className={'fa fa-code'}/> Source Code
               </a>
            </div>
            <div style={{color: 'gray'}}>{description}</div>
         </div>
      );
   } else {
      return (
         <div>
            <div style={{fontSize: "20px"}}>{title}</div>
            <div style={{marginTop: "1rem", marginBottom: "1rem"}}>
               <a href={live} target={"_blank"} rel="noopener noreferrer" style={{border: "2px solid", borderRadius: "25px", padding: "5px", marginRight: "5px"}}>
                  <i className={'fa fa-safari'}/> Live Demo
               </a>
            </div>
            <div style={{color: 'gray'}}>{description}</div>
         </div>
      );
   }
      
}

export default PortfolioBlock;