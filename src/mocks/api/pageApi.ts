import { rest } from 'msw';
import { pageResultData } from './data/pageResultData';

const pageApi = [
  rest.get(`${process.env.NEXT_PUBLIC_API_URL}/posts`, (req, res, ctx) => {
    // Handle the request based on the query parameter value

    return res(ctx.status(200), ctx.json(pageResultData));
  }),
];

export default pageApi;
