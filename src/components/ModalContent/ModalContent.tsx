'use client';
import { useState } from 'react';
import { Auth_Tabs as tabs } from '@/assets/keyword';
import { CgCloseR } from 'react-icons/cg';
import {
  StyledModalContent,
  StyledTabButtonContainer,
  StyledTabButton,
} from './ModalContent-Styled';
import Login from './Login';
import Join from './Join';
import modalStore from '@/store/modalStore';

const SelectTheme = () => {
  const [authTheme, setAuthTheme] = useState(tabs[0].label);
  const setToggleModal = modalStore((state) => state.setToggleModal);
  return (
    <StyledModalContent>
      <StyledTabButtonContainer>
        <div>
          {tabs.map((tab) => (
            <StyledTabButton
              key={tab.id + tab.label}
              onClick={() => setAuthTheme(tab.label)}
              $active={authTheme === tab.label}
            >
              {tab.label}
            </StyledTabButton>
          ))}
        </div>
        <CgCloseR onClick={setToggleModal} />
      </StyledTabButtonContainer>
      {authTheme === tabs[0].label ? <Login /> : <Join />}
    </StyledModalContent>
  );
};

export default SelectTheme;
