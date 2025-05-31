import type { GitHubRepo } from '@/types/github';

const mockRepos: GitHubRepo[] = [
    {
        id: 101,
        name: 'Repository title',
        description: 'Repository description',
        star_count: 12,
        url: '#',
    },
    {
        id: 102,
        name: 'Repository title',
        description: 'Repository description',
        star_count: 48,
        url: '#',
    },
    {
        id: 103,
        name: 'Repository title',
        description: 'Repository description',
        star_count: 23,
        url: '#',
    },
];

export default mockRepos;
