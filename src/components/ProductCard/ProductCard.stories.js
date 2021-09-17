import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'

import { theme } from '../../themes'
import { ProductCard } from './ProductCard'

export default {
    title: 'Components/ProductCard',
    Component: ProductCard,
    argTypes: {
        onClick: { action: 'clicked' },
        buttonText: {
          options: ['Buy Me', 'Sell Me'],
          control: { type: 'radio' }
        }
      }
}

const Template = (args) => <ThemeProvider theme={theme}><ProductCard {...args} /> </ThemeProvider>

export const Default = Template.bind({});
Default.args = {
    title: 'Apple AirPods Max - Sky Blue',
    imgSrc: "https://www.noelleeming.co.nz/shop/render-image/products/202/202571.1.530.556.jpg",
    code: 'llsls', 
    rating: 3,
    reviewsCount: 4,
    price: "1000",
    buttonText: 'Buy Me',
    linkText: "Go there"
}
