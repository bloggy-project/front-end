import { render, screen, renderHook } from '@testing-library/react';
import UserEvent from '@testing-library/user-event';
import SelectTheme from '@/app/_components/SelectTheme/SelectTheme';
import selectKeywordStore from '@/store/selectKeywordStore';

// eslint-disable-next-line jest/no-disabled-tests
describe('Tab Test', () => {
  // eslint-disable-next-line jest/no-focused-tests
  it('Tab change on click', async () => {
    render(<SelectTheme />);
    //zustand store mocking
    const { result } = renderHook(() => selectKeywordStore());
    const button = screen.getByRole('button', {
      name: '블로거',
    });
    await UserEvent.click(button);
    expect(result.current.theme).toBe('블로거');
  });
});
