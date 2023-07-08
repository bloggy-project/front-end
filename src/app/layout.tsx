'use client';
import Navbar from '@/components/Navbar/Naverbar';
import { StyledLayout, StyledWrapper } from '@/components/Layout/Layout-Styled';
import './globals.css';
import StyledComponentsRegistry from '../lib/registry';
import ReactQueryProvider from './ReactQueryProvider';
import Footer from '@/components/Footer/Footer';

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
          <StyledWrapper>
            <ReactQueryProvider>
              <Navbar />
              {children}
            </ReactQueryProvider>
          </StyledWrapper>
          <Footer />
        </StyledLayout>
      </StyledComponentsRegistry>
    </html>
  );
};

export default RootLayout;
