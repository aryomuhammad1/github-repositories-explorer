import { useQuery } from '@tanstack/react-query';
import type { GitHubRepo } from '@/types/github';
import { fetchRepos } from '@/api/github';
import { Card } from '@/components/ui/card';

type RepoListProps = {
    username: string;
    isActive: boolean;
};

export default function RepoList({ username, isActive }: RepoListProps) {
    const {
        data: repos,
        isLoading,
        isError,
        error,
    } = useQuery<GitHubRepo[], Error>({
        queryKey: ['repos', username],
        queryFn: () => fetchRepos(username),
        enabled: isActive,
        staleTime: 1000 * 60 * 5,
    });

    if (isLoading) return <p className="mt-2 text-base text-gray-600">Loading repos...</p>;
    if (isError) return <p className="text-red-500">Failed to fetch repos: {error.message}</p>;
    if (!repos || repos.length === 0) return <p className="mt-2 text-base text-gray-600">No repositories found.</p>;

    return (
        <div className="space-y-3">
            {repos.map((repo) => (
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
