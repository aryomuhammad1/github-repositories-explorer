import type { GitHubRepo } from '@/types/github';
import { Card } from '@/components/ui/card';

type RepoList = {
    repos: GitHubRepo[];
};

export default function RepoList({ repos }: RepoList) {
    if (!repos.length) return <p>No repositories found.</p>;

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
                            <span>{repo.star_count}</span> ⭐
                        </div>
                    </div>
                </Card>
            ))}
        </div>
    );
}
