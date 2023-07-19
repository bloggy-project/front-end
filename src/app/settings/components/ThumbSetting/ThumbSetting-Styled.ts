import styled from 'styled-components';

export const StyledImgSettingBtn = styled.button`
  position: relative;
  border: 0;
  outline: 0;
  & > svg {
    position: absolute;
    font-size: 1.5rem;
    cursor: pointer;
    left: -1rem;
    top: 1rem;
  }
`;

export const StyledImgSettingContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

export const StyledImgErrorContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;