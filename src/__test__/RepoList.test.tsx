import { waitFor } from '@testing-library/react';
import RepoList from '@/components/RepoList';
import { renderWithClient } from '@/lib/utils';
import { server } from '@/mock/server';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('loads and displays repos when active', async () => {
    const result = renderWithClient(
        <RepoList
            username="Repository title"
            isActive={true}
        />
    );
    await waitFor(() => {
        expect(result.getByText('Repository title')).toBeInTheDocument();
    });
});
