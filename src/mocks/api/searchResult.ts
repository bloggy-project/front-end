import { rest } from 'msw';

import { searchResultData } from './data/searchResultData';

const handlers = [
  rest.get('/search', (_, res, ctx) =>
    res(ctx.status(200), ctx.json(searchResultData)),
  ),
];

export default handlers;
