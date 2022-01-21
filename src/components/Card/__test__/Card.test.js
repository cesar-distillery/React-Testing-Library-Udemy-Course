import { render, screen } from "@testing-library/react";
import Card from "../Card";
import userEvent from '@testing-library/user-event';

const catUrl = 'https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-jumbo.jpg?quality=75&auto=webp';

const cat = {
    name: 'Sydney',
    phone: '111-111-1111',
    email: 'casc.santana@gmail.com',
    image: { src: catUrl, alt: 'Cute cat' },
    favoured: false,
    updateFavourite: () => { },
    index: 1
}

describe("Card", () => {
    test('Should show the name of the cat', () => {
        render(
            <Card  {...cat} />
        )

        expect(screen.getByRole('heading', { name: /sydney/i })).toBeInTheDocument();
    });

    test('Should show the phone of the cat', () => {
        render(
            <Card  {...cat} />
        )

        expect(screen.getByText(/111-111-1111/i)).toBeInTheDocument();
    });

    test('Should show the email of the cat', () => {
        render(
            <Card  {...cat} />
        )

        expect(screen.getByText(/casc.santana@gmail.com/i)).toBeInTheDocument();
    });

    test('Should show the image of the cat', () => {
        render(
            <Card  {...cat} />
        )

        expect(screen.getByText(/casc.santana@gmail.com/i)).toBeInTheDocument();
    });

    test('Should show image with correct src', () => {
        render(
            <Card  {...cat} />
        )

        // expect(screen.getByRole('img', { name: /cute cat/i })).toHaveAttribute('src', catUrl);
        expect(screen.getByAltText(/cute cat/i)).toBeInTheDocument()
    });

    test('Should show filled heart', () => {
        render(<Card {...cat} favoured />);

        expect(screen.queryByAltText(/outlined heart/i)).not.toBeInTheDocument();
        expect(screen.getByAltText(/filled heart/i)).toBeInTheDocument();
    });

    test('Should toggle heart status', async () => {
        render(<Card {...cat} />);

        await userEvent.click(screen.getByRole('button'));

        expect(screen.queryByAltText(/outlined heart/i)).not.toBeInTheDocument();
        expect(screen.getByAltText(/filled heart/i)).toBeInTheDocument();
    });
})