import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

type SearchBarProps = {
    onSearch: (query: string) => void;
    loading: boolean;
};

export default function SearchBar({ onSearch, loading }: SearchBarProps) {
    const [input, setInput] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (input.trim()) {
            onSearch(input.trim());
        }
    };

    return (
        <>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-3">
                <Input
                    placeholder="Enter username"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="w-full shadow-none rounded-none p-5 bg-gray-100 placeholder:text-gray-500 border-2 border-gray-300 text-base"
                />
                <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white text-base py-5 font-normal rounded-none">
                    {loading ? 'Searching...' : 'Search'}
                </Button>
            </form>
            {input && <p className="mt-2 text-base text-gray-600">Showing users for "{input}"</p>}
        </>
    );
}
