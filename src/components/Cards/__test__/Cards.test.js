import { render, screen } from '@testing-library/react';
import Cards from "../Cards";
import cats from '../../../mocks/cats.json';

describe('Cards', () => {
    test('Should render five cards components', () => { 
        render(<Cards cats={cats} />);

        expect(screen.getAllByRole('article')).toHaveLength(5);
    }); 
});