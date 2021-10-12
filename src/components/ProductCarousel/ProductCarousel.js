import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import {ProductCard} from '../ProductCard'
import useStyles from './ProductCarousel.style';


export const ProductCarousel = React.memo(({items, Component = ProductCard}) => {
    const [counter, setCounter] = useState(0)

    const classes = useStyles(); 
    const scrollRef = useRef(null);
    let pos = { top: 0, left: 0, x:0, y:0 }
    let scrollContainer;
    useEffect(() => {
       scrollContainer =  scrollRef.current
       scrollContainer.addEventListener('mousedown', mouseDownHandler)

       return () => {
        scrollContainer.removeEventListener('mousedown', mouseDownHandler)
        scrollContainer.removeEventListener('mousemove', mouseMoveHandler)
        scrollContainer.removeEventListener('mouseup', mouseUpHandler)
       }
    })

    const mouseDownHandler = function (e) {
        pos = {
            left: scrollContainer.scrollLeft,
            top: scrollContainer.scrollTop,
            x: e.clientX,
            y: e.clientY,
        }

        scrollContainer.style.cursor = 'grabbing'
        scrollContainer.addEventListener('mousemove', mouseMoveHandler)
        scrollContainer.addEventListener('mouseup', mouseUpHandler)
    }

    const mouseMoveHandler = function (e) {
        const dx = e.clientX - pos.x 
        const dy = e.clientY - pos.y

        scrollContainer.scrollLeft = pos.left - dx
        scrollContainer.scrollTop = pos.top - dy
    }

    const mouseUpHandler = function (e) {
        scrollContainer.style.cursor = 'grab'
        scrollContainer.removeEventListener('mousemove', mouseMoveHandler)
        scrollContainer.removeEventListener('mouseup', mouseUpHandler)
    }



    return <div className={classes.root} ref={scrollRef}>
        {items.map((item) => <div className={classes.scrollItem}> <Component onClick={() => setCounter((prevState) => ({ ...prevState, lastName: 'test'}))} {...item}/> </div>) }
    </div>

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