import { render, screen } from '@testing-library/react';
import Filter from "../Filter";
import userEvent from '@testing-library/user-event';

describe('Filter', () => {
    test('Should able to change value of  favourite select', async () => {

        render(<Filter filters={{}} setFilters={() => { }} />);

        const select = screen.getByLabelText(/favourite/i);
        
        expect(select.value).toBe("any");

        await userEvent.selectOptions(select, "Favoured");

        expect(select.value).toBe("favoured");

        await userEvent.selectOptions(select, 'Not favoured');

        expect(select.value).toBe('not favoured');
    });
});