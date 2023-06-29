'use client';
import Navbar from '@/components/Navbar/Naverbar';
import { StyledLayout } from '@/components/Layout/Layout-Styled';
import './globals.css';
import StyledComponentsRegistry from '../lib/registry';
import ReactQueryProvider from './ReactQueryProvider';
// import { Inter } from 'next/font/google';
// const inter = Inter({ subsets: ['latin'] });

type LayoutProps = {
  children: React.ReactNode;
};

export const metadata = {
  title: 'bloggy.kro.kr',
  description: 'welcome bloggy',
};

const RootLayout = ({ children }: LayoutProps) => {
  return (
    <html>
      <StyledComponentsRegistry>
        <StyledLayout>
          <ReactQueryProvider>
            <Navbar />
            {children}
          </ReactQueryProvider>
        </StyledLayout>
      </StyledComponentsRegistry>
    </html>
  );
};

export default RootLayout;
