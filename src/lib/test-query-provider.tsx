import { RenderOptions, render } from '@testing-library/react';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';
import React, { ReactElement } from 'react';

export function useCustomHook() {
  return useQuery({ queryKey: ['customHook'], queryFn: () => 'Hello' });
}

export const createQueryWrapper = () => {
  // ✅ creates a new QueryClient for each test
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  // eslint-disable-next-line react/display-name
  return ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

const renderWithQueryProvider = (
  ui: ReactElement,
  options: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: createQueryWrapper(), ...options });

export * from '@testing-library/react';
//기존의 render만 오버라이드 해서 내보낸다
export { renderWithQueryProvider as render };
