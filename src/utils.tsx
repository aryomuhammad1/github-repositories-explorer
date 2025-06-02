import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render } from '@testing-library/react';

const createTestQueryClient = () => new QueryClient();

export function renderWithClient(ui: React.ReactElement) {
    const testQueryClient = createTestQueryClient();
    const { rerender, ...result } = render(<QueryClientProvider client={testQueryClient}>{ui}</QueryClientProvider>);
    return {
        ...result,
        rerender: (rerenderUi: React.ReactElement) =>
            rerender(<QueryClientProvider client={testQueryClient}>{rerenderUi}</QueryClientProvider>),
    };
}
