import Main from './_components/Main/Main';
import SelectContainer from './_components/SelectContainer/SelectContainer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'bloggy.kro.kr',
  description: 'welcome to bloggy',
};

export default function Home() {
  return (
    <>
      <SelectContainer />
      <Main />
    </>
  );
}
