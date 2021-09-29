import { render, fireEvent, waitFor } from '@testing-library/react';
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
test.only('Button changes text properly', async () => {
    const onClick = jest.fn()
    const expectedTextButton = "Test"
 
    const { getByTestId } = render(<ProductCard onClick={onClick}/>)
    const button = getByTestId('onclick-test-id')
       // Check that the button on product first renders the initial text whiCh is TEST
    expect(button).toHaveTextContent(expectedTextButton)
    fireEvent.click(button)
        // check that the text changed when you click the button and check that is rendering the proper text
    await waitFor(() => {
    expect(button).toHaveTextContent("Clicked")
    })
    



})
})