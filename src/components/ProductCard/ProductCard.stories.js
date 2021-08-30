import React from  'react'
import { ThemeProvider } from '@material-ui/core/styles'

import {theme} from '../../themes'
import { ProductCard } from  './ProductCard'

export default {
    title: 'Components/ProductCard',
    Component: ProductCard
}

const Template = (args) => <ThemeProvider theme={theme}><ProductCard {...args} /> </ThemeProvider>

export const Default = Template.bind({});
Default.args = {
    title: 'product name',
}
