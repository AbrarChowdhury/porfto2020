import React from 'react'
import Card from '../ProjectCard/Card'
import Grid from '@material-ui/core/Grid';
const numbers = [1,2,3,4,5,6,7,8,9]

function GridList() {
    
    return (
        <div>
        <Grid container spacing={1}>
            {numbers.map( (i)=>
                
                <Grid item xs={12} md={4}>
                    <Card/>
                </Grid>
            )}
        </Grid>
        </div>
    )
}

export default GridList
