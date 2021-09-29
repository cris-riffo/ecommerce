import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid';
import {ProductCard} from '../ProductCard'


export const ProductCarousel = React.memo(({items, Component = ProductCard}) => {
// calculation


    return <Grid container>
        {items.map((item) => <Component {...item}/>)}
    </Grid>

})


ProductCarousel.propTypes = {
    Component: PropTypes.node,
    items: PropTypes.arrayOf(PropTypes.shape({
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
    })).isRequired
};

ProductCarousel.defaultProps = {
    Component: ProductCard
};