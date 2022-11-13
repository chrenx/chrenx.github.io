import React from 'react';
import PortfolioBlock from "./PortfolioBlock";
import {Box, Grid} from "@mui/material";
import {info} from "../../info/Info";
import underConstruction from "../../img/underConstructionSign.png";


export default function Portfolio() {
    return (
        <Box sx={{m:"2rem"}}>
            {/* <Grid container display={'flex'} justifyContent={'center'}> */}
            {/* <Grid container> */}

            {info.portfolio.map(project => (
                <div style={{padding: '1rem'}}>
                <Grid container>
                    <Grid item xs={3}>
                        <img src={project.image} style={{width: "90%"}}></img>
                    </Grid>
                    <Grid item xs={9}>
                        <PortfolioBlock live={project.live} source={project.source} title={project.title} description={project.description} />
                    </Grid>
                </Grid>
                </div>
                
            ))}
            {/* </Grid> */}
        
            <Grid container display={'flex'} justifyContent={'center'}>
                <Box component={'img'} src={underConstruction} alt={'under-construction-sign'}/>
            </Grid>
        
        </Box>
        
    );
};