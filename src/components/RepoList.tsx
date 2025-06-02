import type { GitHubRepo } from '@/types/github';
import { Card } from '@/components/ui/card';
import { useEffect, useState } from 'react';
import { fetchRepos } from '@/api/github.ts';

type RepoListProps = {
    username: string;
    isActive: boolean;
};

export default function RepoList({ username, isActive }: RepoListProps) {
    const [repos, setRepos] = useState<GitHubRepo[] | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!isActive || repos) return;

        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);
                const result = await fetchRepos(username);
                setRepos(result);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [isActive, username, repos]);

    if (loading) return <p className="mt-2 text-base text-gray-600">Loading repos...</p>;
    if (error) return <p className="text-red-500">Failed to fetch repos: {error}</p>;
    if (!repos || repos.length === 0) return <p className="mt-2 text-base text-gray-600">No repositories found.</p>;

    return (
        <div className="space-y-3">
            {repos?.map((repo) => (
                <Card
                    key={repo.id}
                    className="bg-gray-300 px-4 py-3 rounded-none">
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="font-bold text-lg">{repo.name}</h3>
                            <p className="text-sm">{repo.description}</p>
                        </div>
                        <div className="text-sm font-medium flex items-center gap-1">
                            <span>{repo.stargazers_count}</span> ⭐
                        </div>
                    </div>
                </Card>
            ))}
        </div>
    );
}
