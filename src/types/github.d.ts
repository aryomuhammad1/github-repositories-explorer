export type GitHubUser = {
    username: string;
    id: number;
    url: string;
};

export type GitHubRepo = {
    id: number;
    name: string;
    description: string | null;
    star_count: number;
    url: string;
};
