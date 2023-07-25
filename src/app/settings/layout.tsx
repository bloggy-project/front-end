'use client';
import { StyledCommonPageLayout } from '@/components/Layout/Layout-Styled';

type SettingsLayoutProps = {
  children: React.ReactNode;
};
const SettingsLayout = ({ children }: SettingsLayoutProps) => {
  return <StyledCommonPageLayout>{children}</StyledCommonPageLayout>;
};

export default SettingsLayout;
