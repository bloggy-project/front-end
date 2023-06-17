import { render, screen } from '@testing-library/react';
import UserEvent from '@testing-library/user-event';
import Tab from '../app/_components/Tab/Tab';

describe('Tab Test', () => {
  it('Tab change on click', async () => {
    render(<Tab />);
    const button = screen.getByRole('button', {
      name: '블로거',
    });
    await UserEvent.click(button);
    const contents = screen.getByTestId('blogger-contents');
    expect(contents).toBeInTheDocument();
  });
});
