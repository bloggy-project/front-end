import { rest } from 'msw';
import { pageResultData } from './data/pagetResultData';

const pageApi = [
  rest.get('/posts', (req, res, ctx) => {
    const queryParams = req.url.searchParams;
    const date = queryParams.get('date');

    // Handle the request based on the query parameter value
    if (date === 'day') {
      return res(ctx.status(200), ctx.json(pageResultData));
    }

    // Handle other cases or return an appropriate response

    // If no match is found, return a 404 response
    return res(ctx.status(404));
  }),
];

export default pageApi;
