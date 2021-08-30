import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import StarIcon from '@material-ui/icons/Star';

const useStyles = makeStyles({
    root: {
        maxWidth: 281,
    },
    media: {
        height: 177,
    },
});

export const ProductCard = () => {
    const classes = useStyles();
    return <Card elevation={0} className={classes.root}>
        <CardActionArea>
            <CardMedia className={classes.media} image='https://www.noelleeming.co.nz/shop/render-image/products/183/183120.309.200.jpg' />
            <Typography variant="h6">Endeavour HDMI 2.1 Cable 2m</Typography>
            <Typography variant="caption">126082</Typography>
            <Rating name="read-only" value={4} readOnly />
            <Typography variant="caption">(3)</Typography>
            <Typography variant="body1">49.00</Typography>
        </CardActionArea>
        <CardActions>
            <Button variant="contained" color="secondary">Buy</Button>
            <Button startIcon={<StarIcon />} >Buy </Button>
        </CardActions>
    </Card>

}