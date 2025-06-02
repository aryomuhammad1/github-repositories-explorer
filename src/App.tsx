import { useSearchParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import SearchBar from '@/components/SearchBar';
import UserList from '@/components/UserList';
import { searchUsers } from '@/api/github';
import type { GitHubUser } from '@/types/github';

export default function App() {
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('q') || '';

    const {
        data: users = [],
        isLoading,
        isError,
        error,
    } = useQuery<GitHubUser[], Error>({
        queryKey: ['users', query],
        queryFn: () => searchUsers(query),
        enabled: !!query,
    });

    return (
        <div className="max-w-md mx-auto mt-5 px-5">
            <SearchBar
                initInput={query}
                onSearch={(searchQuery) => setSearchParams({ q: searchQuery })}
                loading={false}
            />
            {isLoading && <p className="mt-2 text-base text-gray-600">Loading users...</p>}
            {isError && <p className="text-red-500">Failed to fetch users: {error.message}</p>}

            {!isError && !isLoading && (
                <>
                    {users.length > 0 ? (
                        <>
                            <p className="mt-2 text-base text-gray-600">Showing users for "{query}"</p>
                            <UserList users={users} />
                        </>
                    ) : (
                        <p className="mt-2 text-base text-gray-600">No users found.</p>
                    )}
                </>
            )}
        </div>
    );
}
