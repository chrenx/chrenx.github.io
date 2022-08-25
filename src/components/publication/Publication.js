import React from 'react';
import {Box, Grid} from "@mui/material";
import underConstruction from "../../img/underConstructionSign.png"

export default function Publication() {
    return (
        <Box>
            <Grid container display={'flex'} justifyContent={'center'}>
            <Box component={'img'} src={underConstruction} alt={'under-construction-sign'}/>
            </Grid>
        </Box>
    );
};