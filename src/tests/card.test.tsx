import { render, screen } from '@/lib/test-query-provider';
import Card from '@/app/_components/Card/Card';

// eslint-disable-next-line jest/no-disabled-tests
describe.skip('Card Test', () => {
  it('Card Rendering', async () => {
    render(<Card theme="게시물" optionTheme={'최신순'} option={'today'} />);
    const contents = await screen.findByText('제목90');
    expect(contents).toBeInTheDocument();
  });
});
