import { useEffect, useState } from 'react';
import SearchBar from '@/components/SearchBar';
import UserList from '@/components/UserList';
import type { GitHubUser } from '@/types/github';
import { searchUsers } from '@/api/github.ts';
import { useSearchParams } from 'react-router-dom';

export default function App() {
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('q') || '';

    const [users, setUsers] = useState<GitHubUser[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!query) {
            setUsers([]);
            return;
        }

        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);
                const result = await searchUsers(query);
                setUsers(result);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [query]);

    return (
        <div className="max-w-md mx-auto mt-5 px-5">
            <SearchBar
                initInput={query}
                onSearch={(searchQuery) => {
                    setSearchParams({ q: searchQuery });
                }}
                loading={false}
            />
            {loading && <p className="mt-2 text-base text-gray-600">Loading users...</p>}
            {error && <p className="text-red-500">Failed to fetch users: {error}</p>}
            {!error &&
                !loading &&
                (users.length > 0 ? (
                    <>
                        <p className="mt-2 text-base text-gray-600">Showing users for "{query}"</p>
                        <UserList users={users} />
                    </>
                ) : (
                    <p className="mt-2 text-base text-gray-600">No users found.</p>
                ))}
        </div>
    );
}
