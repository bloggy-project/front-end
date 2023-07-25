'use client';
import { useState } from 'react';
import { AuthTheme } from '@/assets/keyword';
import { CgCloseR } from 'react-icons/cg';
import {
  StyledModalContent,
  StyledTabButtonContainer,
  StyledTabButton,
} from './ModalContent-Styled';
import Login from '../Form/Login';
import Join from '../Form/Join';
import modalStore from '@/store/modalStore';

const SelectTheme = () => {
  const [authTheme, setAuthTheme] = useState(AuthTheme[0].label);
  const setToggleModal = modalStore((state) => state.setToggleModal);
  return (
    <StyledModalContent>
      <StyledTabButtonContainer>
        <div>
          {AuthTheme.map((theme) => (
            <StyledTabButton
              key={theme.id + theme.label}
              onClick={() => setAuthTheme(theme.label)}
              $active={authTheme === theme.label}
            >
              {theme.label}
            </StyledTabButton>
          ))}
        </div>
        <CgCloseR onClick={setToggleModal} />
      </StyledTabButtonContainer>
      {authTheme === AuthTheme[0].label ? <Login /> : <Join />}
    </StyledModalContent>
  );
};

export default SelectTheme;
