import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Counter from '../Counter';
import {setupServer} from 'msw/node'
import { getCount } from '../mocks';

const renderComponent = () => {
    return render(<Counter />)
}

describe('Counter suite', () => {
    beforeAll(() => {
        const server = setupServer(getCount);
        server.listen();
    });

    test('Should increment count when button is clicked', async () => {
         renderComponent();

         const button = await screen.findByTestId("buttonQa");

         fireEvent.click(button);

         expect(screen.getByTestId('counter').textContent).toEqual("Count is: 101");
    });

    test("Should render correctly", async() => {
        const {container} = renderComponent();

        await screen.findByTestId("buttonQa");

        expect(container).toMatchSnapshot();
    })
})