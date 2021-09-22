
import { render, fireEvent } from '@testing-library/react';
import { ProductCard } from './ProductCard'



describe('When testing ProductCard component', () => {
    test('it renders props properly', () => {
        const expectingTitle = "Hello";
        const expectedButtonText = "Buy"
        const onClick = jest.fn()
        const { debug, getByTestId } = render(<ProductCard buttonText={expectedButtonText} title={expectingTitle} onClick={onClick} />)

        debug()
        const button = getByTestId('onclick-test-id')
        expect(button).toHaveTextContent(expectedButtonText)
        fireEvent.click(button)

        expect(onClick).toHaveBeenCalledTimes(1)
        const result = getByTestId('product-title-id')
        expect(result).toHaveTextContent(expectingTitle)
    })
})