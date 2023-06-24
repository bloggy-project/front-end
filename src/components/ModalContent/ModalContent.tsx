import { useState } from 'react';
import { Auth_Tabs as tabs } from '@/assets/keyword';

import {
  StyledModalContent,
  StyledTabButtonContainer,
  StyledTabButton,
} from './ModalContent-Styled';
import Login from './Login';
import Join from './Join';

const SelectTheme = () => {
  const [authTheme, setAuthTheme] = useState(tabs[0].label);

  return (
    <StyledModalContent>
      <StyledTabButtonContainer>
        {tabs.map((tab) => (
          <StyledTabButton
            key={tab.id + tab.label}
            onClick={() => setAuthTheme(tab.label)}
            $active={authTheme === tab.label}
          >
            {tab.label}
          </StyledTabButton>
        ))}
      </StyledTabButtonContainer>
      {authTheme === tabs[0].label ? <Login /> : <Join />}
    </StyledModalContent>
  );
};

export default SelectTheme;
