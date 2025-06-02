import { render, screen } from '@testing-library/react';
import UserList from '@/components/UserList';
import mockUsers from '@/mock/mockUsers';

test('renders list of GitHub users', () => {
    render(<UserList users={mockUsers} />);
    expect(screen.getByText('Exampleuser1')).toBeInTheDocument();
    expect(screen.getByText('Exampleuser2')).toBeInTheDocument();
    expect(screen.getByText('Exampleuser3')).toBeInTheDocument();
});
