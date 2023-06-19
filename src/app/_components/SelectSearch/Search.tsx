import { ChangeEvent } from 'react';
import {
  StyledSearchButton,
  StyledSearchContainer,
  StyledSearchInput,
} from './Search-Styled';
import useToggle from '@/hooks/useToggle';
import { BsSearch } from 'react-icons/bs';
import { useEffect, useRef } from 'react';
import selectKeywordStore from '@/store/selectKeywordStore';
import { shallow } from 'zustand/shallow';

const Search = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { isOpen, onChangeOpen } = useToggle();

  const { theme, setSearched } = selectKeywordStore(
    (state) => ({ theme: state.theme, setSearched: state.setSearched }),
    shallow,
  );

  const onChangeSearched = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearched(value);
  };

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = '';
      inputRef.current.focus();
      setSearched('');
    }
  }, [theme]);

  return (
    <StyledSearchContainer>
      <StyledSearchInput
        ref={inputRef}
        type="text"
        isopen={isOpen ? 'open' : 'close'}
        onChange={(e) => onChangeSearched(e)}
      />
      <StyledSearchButton onClick={onChangeOpen}>
        <BsSearch className="SearchButton" />
      </StyledSearchButton>
    </StyledSearchContainer>
  );
};

export default Search;
