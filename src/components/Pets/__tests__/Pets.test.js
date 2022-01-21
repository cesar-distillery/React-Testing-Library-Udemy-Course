import { screen, render, within, waitFor } from '@testing-library/react';
import Pets from '../Pets';

import { rest } from 'msw';
import { setupServer } from 'msw/node';
import catsMock from '../../../mocks/cats.json';
import userEvent from '@testing-library/user-event';

const server = setupServer(rest.get('http://localhost:4000/cats', (req, res, ctx) => {
    return res(
        ctx.status(200),
        ctx.json(catsMock)
    );
}));

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Pets', () => {
    test('Should render the correct about of cards', async () => {
        render(<Pets />);

        const cards = await screen.findAllByRole('article');

        expect(cards.length).toBe(5);
    });


    test('Should filter for male cats', async () => {
        render(<Pets />);

        const cards = await screen.findAllByRole('article');

        userEvent.selectOptions(screen.getByLabelText(/gender/i), 'male');

        const maleCards = screen.getAllByRole('article');


        expect(maleCards).toStrictEqual([cards[1], cards[3]]);
    })

    test('Should filter for female cats', async () => {
        render(<Pets />);

        const cards = await screen.findAllByRole('article');

        userEvent.selectOptions(screen.getByLabelText(/gender/i), 'female');

        const female = screen.getAllByRole('article');


        expect(female).toStrictEqual([cards[0], cards[2], cards[4]]);
    })

    test('Should filter for favoured cats', async () => {
        render(<Pets />);

        // await waitFor(() => { 
        //     screen.getAllByRole('article');
        //     // const cards = await screen.findAllByRole('article');
        // });
        
        const cards = await screen.findAllByRole('article');
        userEvent.click(within(cards[0]).getByRole('button'));
        userEvent.click(within(cards[3]).getByRole('button'));

        userEvent.selectOptions(screen.getByLabelText(/favourite/i), 'favoured');

        expect(screen.getAllByRole('article')).toStrictEqual([cards[0], cards[3]]);
    });

    test('Should filter for not favoured cats', async () => {
        render(<Pets />);

        const cards = await screen.findAllByRole('article');

        const btnForFirstCard = within(cards[0]).getByRole('button');
        const btnForFourthCard = within(cards[3]).getByRole('button');

        userEvent.click(btnForFirstCard);
        userEvent.click(btnForFourthCard);

        userEvent.selectOptions(screen.getByLabelText(/favourite/i), 'not favoured');

        expect(screen.getAllByRole('article')).toStrictEqual(
            [
                cards[1], cards[2], cards[4]
            ]
        );
    });

    test('Should filter for favourite male cats', async() => {
        render(<Pets />);

        const cards = await screen.findAllByRole('article');
        const btnForFirstCard = within(cards[0]).getByRole('button');
        const btnForFourthCard = within(cards[3]).getByRole('button');

        userEvent.click(btnForFirstCard);
        userEvent.click(btnForFourthCard);

        userEvent.selectOptions(screen.getByLabelText(/favourite/i), 'favoured');
        userEvent.selectOptions(screen.getByLabelText(/gender/i), 'male');

        expect(screen.getAllByRole('article')).toStrictEqual([cards[3]]);

        expect(screen.getAllByRole('article')).toHaveLength(1);
    });
})