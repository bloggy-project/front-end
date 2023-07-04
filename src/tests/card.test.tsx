import { render, screen } from '@/lib/test-query-provider';
import Card from '@/app/_components/Card/Card';

describe('Card Test', () => {
  it('Card Rendering', async () => {
    render(<Card optionTheme={'최신순'} option={'today'} />);
    const contents = await screen.findByText('제목90');
    expect(contents).toBeInTheDocument();
  });
});
