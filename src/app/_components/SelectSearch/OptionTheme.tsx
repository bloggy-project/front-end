import { OptionTheme as theme } from '@/assets/keyword';
import { useState, memo, useRef } from 'react';
import { StyledOptionTheme, StyledThemeContainer } from './OptionTheme-Styled';
import {
  AiFillCaretDown,
  AiFillCaretLeft,
  AiFillCaretRight,
  AiFillCaretUp,
} from 'react-icons/ai';
import useToggle from '@/hooks/useToggle';
import Options from './Options';

const OptionTheme = () => {
  const optionRef = useRef<HTMLDivElement>(null);
  const { isOpen, onChangeOpen, closeOnly } = useToggle(optionRef);
  const [active, setActive] = useState(theme[0].name);

  const onChangeActive = () => {
    if (active === theme[0].name) {
      setActive(theme[1].name);
      closeOnly();
    } else {
      setActive(theme[0].name);
    }
  };

  return (
    <StyledOptionTheme>
      <AiFillCaretLeft onClick={onChangeActive} />
      {theme.map((theme) => (
        <StyledThemeContainer
          key={theme.name}
          $ishidden={active === theme.name}
        >
          <span onClick={onChangeActive}>{theme.name}</span>
          {theme.hasOption &&
            (isOpen ? (
              <AiFillCaretUp onClick={onChangeOpen} />
            ) : (
              <AiFillCaretDown onClick={onChangeOpen} />
            ))}
        </StyledThemeContainer>
      ))}
      <AiFillCaretRight onClick={onChangeActive} />
      {isOpen && <Options ref={optionRef} />}
    </StyledOptionTheme>
  );
};

export default memo(OptionTheme);
