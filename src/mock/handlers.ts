import { rest } from 'msw';
import mockRepos from './mockRepos';
import mockUsers from './mockUsers';

export const handlers = [
    rest.get('https://api.github.com/search/users', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json({ items: mockUsers }));
    }),

    rest.get('https://api.github.com/users/:username/repos', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(mockRepos));
    }),
];
