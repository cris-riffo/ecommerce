
import {render, fireEvent} from  '@testing-library/react';
import { ProductCard } from  './ProductCard'



describe('When testing ProductCard component', () => {
    test('it renders props properly', () => {
        const expectingTitle = "Hello";
        const onClick = jest.mock();
     const {debug, getByTestId } =   render(<ProductCard title={expectingTitle} onClick={onClick}/>)
    

    //  console.log('mockedOnclick', onClick)
     const button = getByTestId('onclick-test-id')
     fireEvent.click(button)

     debug()

    //  console.log('mockedOnclick', onClick)


    expect(onClick).toHaveBeenCalledTimes(1)
     const result = getByTestId('product-title-id')
     expect(result.innerHTML).toEqual(expectingTitle)
    })
})