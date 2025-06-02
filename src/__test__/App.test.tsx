import { waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import App from '@/App';
import { renderWithClient } from '@/utils';
import { server } from '@/mock/server';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('searches and displays GitHub users based on URL query', async () => {
    const result = renderWithClient(
        <MemoryRouter initialEntries={['/?q=Exampleuser1']}>
            <Routes>
                <Route
                    path="/"
                    element={<App />}
                />
            </Routes>
        </MemoryRouter>
    );

    await waitFor(() => {
        expect(result.getByText(/Exampleuser1/i)).toBeInTheDocument();
    });
});
