import type { GitHubUser, GitHubRepo } from '@/types/github';

export async function searchUsers(username: string): Promise<GitHubUser[]> {
    const res = await fetch(`https://api.github.com/search/users?q=${username}&per_page=5`);
    if (!res.ok) throw new Error('Failed to search users');

    const data: unknown = await res.json();

    if (typeof data !== 'object' || data === null || !('items' in data) || !Array.isArray((data as any).items)) {
        throw new Error('Malformed user data from GitHub');
    }

    return (data as { items: GitHubUser[] }).items;
}

export async function fetchRepos(username: string): Promise<GitHubRepo[]> {
    const res = await fetch(`https://api.github.com/users/${username}/repos`);
    if (!res.ok) throw new Error('Failed to fetch repos');

    const data: unknown = await res.json();
    if (!Array.isArray(data)) throw new Error('Malformed repo data');

    return data as GitHubRepo[];
}
