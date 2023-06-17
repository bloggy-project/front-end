import Search from '@/components/Search';
import { waitFor, render, screen, logRoles } from '@testing-library/react';
import UserEvent from '@testing-library/user-event';

describe('검색페이지 통합테스트', () => {
  // eslint-disable-next-line jest/no-focused-tests
  it.only('검색어 입력후 엔터 키를 입력하면 검색된 앨범을 보여준다.', async () => {
    const { container } = render(<Search />);

    const inputBox = screen.getByRole('button', { name: 'text' });

    //검색어 입력
    await UserEvent.click(inputBox);
    logRoles(container);
    await waitFor(() => {
      //렌더링 결과 확인
      expect(screen.queryByText('조각집')).toBeInTheDocument();
    });
  });
});
