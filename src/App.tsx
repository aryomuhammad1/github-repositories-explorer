import { useState } from 'react';
import SearchBar from '@/components/SearchBar';
import UserList from '@/components/UserList';
import mockUsers from '@/mock/mockUsers';

export default function App() {
    const [users, setUsers] = useState(mockUsers);

    const handleSearch = async (_query: string) => {
        setUsers(mockUsers);
    };

    return (
        <div className="max-w-md mx-auto mt-5 px-5">
            <SearchBar
                onSearch={handleSearch}
                loading={false}
            />
            <UserList users={users} />
        </div>
    );
}
