import React from  'react'

import { ProductCard } from  './ProductCard'

export default {
    title: 'Components/ProductCard',
    Component: ProductCard
}

const Template = (args) => <ProductCard {...args} />

export const Default = Template.bind({});
Default.args = {
    title: 'product name',
}
