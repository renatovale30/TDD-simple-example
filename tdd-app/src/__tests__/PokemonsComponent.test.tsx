import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Pokemons from '../Pokemons';
import { setupServer } from 'msw/node'
import { getPokemons } from '../mocks';

const renderComponent = () => {
    return render(<Pokemons />);
}

describe("Pokemons Component test suite", () => {
    beforeAll(() => {
        const server = setupServer(getPokemons);
        server.listen();
    })

    test("Should render correctly", async () => {
        // Render component
        const { container } = renderComponent();

        await screen.findByTestId("pokemons-list");

        // MatchSnapshot
        expect(container).toMatchSnapshot();
    })

    test("Should show Pokemons matching search", async () => {
        // Render component
        const { container } = renderComponent();

        await screen.findByTestId("pokemons-list");

        // Perform search

        const search = screen.getByTestId("pokemon-search");

        userEvent.type(search, "Bulbasaur");

        await waitFor(() => {
            expect(screen.getAllByTestId("pokemon-card")).toHaveLength(1)
        })

        // MatchSnapshot
        expect(container).toMatchSnapshot();
    })
})