import { render, screen } from '@testing-library/react';
import UserEvent from '@testing-library/user-event';
import SelectTheme from '@/app/_components/SelectTheme/SelectTheme';

// eslint-disable-next-line jest/no-disabled-tests
describe.skip('Tab Test', () => {
  it('Tab change on click', async () => {
    render(<SelectTheme />);
    const button = screen.getByRole('button', {
      name: '블로거',
    });
    await UserEvent.click(button);
    const contents = screen.getByTestId('blogger-contents');
    expect(contents).toBeInTheDocument();
  });
});
