export type GitHubUser = {
    login: string;
    id: number;
    url: string;
};

export type GitHubRepo = {
    id: number;
    name: string;
    description: string | null;
    stargazers_count: number;
    url: string;
};
