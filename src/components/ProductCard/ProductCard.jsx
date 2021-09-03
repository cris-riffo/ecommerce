import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import StarIcon from '@material-ui/icons/Star';

const useStyles = makeStyles({
    root: {
        maxWidth: 281,
    },
    media: {
        height: 177,
    },
    cardArea: {
        backgroundColor: 'none'
    },
    cardActions: {
        backgroundColor: 'none'
    }
});

export const ProductCard = () => {
    const classes = useStyles();
    return <Card component={Grid} container elevation={0} className={classes.root} direction="column" >

        <CardActionArea className={classes.cardArea}>
            <CardMedia className={classes.media} image='https://www.noelleeming.co.nz/shop/render-image/products/183/183120.309.200.jpg' />
            <Typography variant="h6">Endeavour HDMI 2.1 Cable 2m</Typography>

            <Grid container direction="column">
                <Typography variant="caption">126082</Typography>
                <Grid container item direction="row" alignItems="center">
                    <Rating name="read-only" value={4} readOnly />
                    <Typography variant="caption">(3)</Typography>
                </Grid>
                <Typography variant="body1">49.00</Typography>
            </Grid>
        </CardActionArea>
        <CardActions className={classes.cardActions}>
        <Grid container direction="column" alignItems="flex-start">
            <Button variant="contained" color="secondary">Buy</Button>
            <Button startIcon={<StarIcon />} >add to whishlist </Button>
            </Grid>
        </CardActions>
    </Card>

}