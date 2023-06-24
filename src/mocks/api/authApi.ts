import { rest } from 'msw';

type LoginRequestBody = {
  email: string;
  password: string;
};

const authApi = [
  rest.post<LoginRequestBody>('/login', async (req, res, ctx) => {
    const { email, password } = await (req.json() as Promise<LoginRequestBody>);
    if (!email || !password) {
      return res(
        ctx.status(400),
        ctx.json({ message: '로그인에 실패하였습니다!' }),
      );
    }
    return res(ctx.json({ message: '환영합니다!' }));
  }),
  rest.post('/join', (req, res, ctx) => {
    // Perform any necessary response mocking here
    return res(ctx.status(200), ctx.json({ success: true }));
  }),
];

export default authApi;
