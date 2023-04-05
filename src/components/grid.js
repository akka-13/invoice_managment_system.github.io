import React, { useEffect } from "react";
import {useState} from "react";
import Button from "./Button";
import Grid from '@material-ui/core/Grid';

function grid(){
    return(
        <div>
            <Grid>
    <Button variant="contained">Add</Button>
</Grid>
        </div>
    );

}
export default grid;