import React from 'react';
import {Box, makeStyles, TextField} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    comonent : {
        background: '#F6F6F6',
        '& > *' : {
            margin : theme.spacing(2)
        }
    }
}))

const BreadCrumb = ({onTextChange,onCountChange}) =>{
    const classes = useStyles();
    return(
        <Box className={classes.comonent}>
            <TextField
                label="Search Images"
                onChange={(event) => onTextChange(event.target.value)}
            />

            <TextField
                label="Number of Images"
                onChange={(event) => onCountChange(event.target.value)}
            />
        </Box>
    )
}

export default BreadCrumb;