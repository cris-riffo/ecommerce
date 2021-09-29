import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'

import { theme } from '../../themes'
import { ProductCarousel } from './ProductCarousel'

export default {
    title: 'Components/ProductCarousel',
    Component: ProductCarousel,
    argTypes: {
        onClick: { action: 'clicked' },
        buttonText: {
          options: ['Buy Me', 'Sell Me'],
          control: { type: 'radio' }
        }
      }
}

const Template = (args) => <ThemeProvider theme={theme}><ProductCarousel {...args}></ProductCarousel> </ThemeProvider>

export const Default = Template.bind({});
Default.args = {
  items : [
{
  title: 'Apple AirPods Max - Sky Blue',
  imgSrc: "https://www.noelleeming.co.nz/shop/render-image/products/202/202571.1.530.556.jpg",
  code: 'llsls', 
  rating: 3,
  reviewsCount: 4,
  price: "1000",
  buttonText: 'Buy Me',
  linkText: "Go there"
},
{
  title: 'Kontrol Freek Battle Royale Black XBO',
  imgSrc: "https://www.noelleeming.co.nz/shop/render-image/products/190/190260.309.200.jpg",
  code: 'llsls', 
  rating: 3,
  reviewsCount: 4,
  price: "1000",
  buttonText: 'Buy Me',
  linkText: "Go there"
}
  ]
}
