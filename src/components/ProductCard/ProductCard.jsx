import { useState } from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/Star';
import useStyles from './ProductCard.style';


export const ProductCard = ({imgSrc, title, code, rating, reviewsCount, price, buttonText, linkText, onClick}) => {
    const classes = useStyles();
    const [internalButtonText, setInternalButtonText] = useState('Test')


const onClickWithUseState = () => {
    onClick();
    setInternalButtonText("Clicked")

}

    return <Card component={Grid} container elevation={0} className={classes.root} direction="column" >
        <CardActionArea  className={classes.cardArea} >
            <CardMedia className={classes.media} image={imgSrc} />
            <Typography variant="h6" data-testid="product-title-id">{title}</Typography>
            <Grid container direction="column">
                <Typography variant="caption">{code}</Typography>
                <Grid container item direction="row" alignItems="center">
                    <Rating name="read-only" value={rating} readOnly />
                    <Typography variant="caption">({reviewsCount})</Typography>
                </Grid>
                <Typography variant="body1">{price}</Typography>
            </Grid>
        </CardActionArea>
        <CardActions className={classes.cardActions}>
        <Grid container direction="column" alignItems="flex-start">
            <Button data-testid="onclick-test-id" variant="contained" color="secondary" onClick={onClickWithUseState}>{internalButtonText}</Button>
            <Button startIcon={<StarIcon />} >{linkText}</Button>
            </Grid>
        </CardActions>
    </Card>
}

ProductCard.propTypes = {
    imgSrc: PropTypes.string,
    title: PropTypes.string,
    code: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    buttonText: PropTypes.oneOf(["Buy", "Sell"]),
    reviewsCount: PropTypes.number,
    user: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        profession: PropTypes.arrayOf(PropTypes.object)
    }),
    onClick: PropTypes.func,
};
