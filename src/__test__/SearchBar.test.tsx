import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '@/components/SearchBar';

describe('SearchBar', () => {
    it('renders input and submit button', () => {
        render(
            <SearchBar
                initInput=""
                onSearch={jest.fn()}
                loading={false}
            />
        );
        expect(screen.getByRole('textbox')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument();
    });

    it('calls onSearch with the input value', () => {
        const mockSearch = jest.fn();
        render(
            <SearchBar
                initInput=""
                onSearch={mockSearch}
                loading={false}
            />
        );
        const input = screen.getByRole('textbox');
        const button = screen.getByRole('button');

        fireEvent.change(input, { target: { value: 'john' } });
        fireEvent.click(button);

        expect(mockSearch).toHaveBeenCalledWith('john');
    });

    it('disables button when input is empty', () => {
        render(
            <SearchBar
                initInput=""
                onSearch={jest.fn()}
                loading={false}
            />
        );
        expect(screen.getByRole('button')).toBeDisabled();
    });
});
