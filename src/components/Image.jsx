import {Card, makeStyles} from '@material-ui/core';

const useStyles =  makeStyles({
    image:{
        width:'100%',
        height:'auto',
        margin:'5px',
        objectFit:'cover'
    }
})

const Image = ({image}) => {
    const classes = useStyles();
    return (
        <Card >
        <img src={image.largeImageURL} className={classes.image} />
        </Card>
    )
}

export default Image;