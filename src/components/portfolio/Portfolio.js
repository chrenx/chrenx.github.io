import React from 'react';
import PortfolioBlock from "./PortfolioBlock";
import {Box, Grid} from "@mui/material";
import {info} from "../../info/Info";
import underConstruction from "../../img/underConstructionSign.png";


export default function Portfolio() {
    return (
        <Box>
            <Grid container display={'flex'} justifyContent={'center'}>
                {info.portfolio.map(project => (
                   <Grid item xs={12} md={4}>
                       <PortfolioBlock image={project.image} live={project.live} source={project.source} title={project.title} />
                   </Grid>
                ))}
            </Grid>
        
            <Grid container display={'flex'} justifyContent={'center'}>
                <Box component={'img'} src={underConstruction} alt={'under-construction-sign'}/>
            </Grid>
        
        </Box>
        
    );
};