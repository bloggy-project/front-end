import { Palette, Effect } from '@/assets/color';
import Link from 'next/link';
import styled from 'styled-components';

export const StyledTagBoxContainer = styled.div`
  margin-top: 8rem;
  padding-bottom: 3rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  border-bottom: solid 1.5px ${Effect.SHADOW};
`;

export const StyledTag = styled(Link)`
  padding: 0.5rem;
  font-size: 1.2rem;
  font-weight: 700;
  border-radius: 1rem;
  background-color: ${Palette.SPOT2};
  margin-right: 1rem;
  color: ${Effect.SELECTED};
  &:hover {
    background-color: ${Palette.SPOT1};
    color: ${Palette.SPOT2};
  }
`;

export const StyledTagBoxText = styled.p`
  font-size: 1.4rem;
  font-weight: 600;
  color: ${Effect.HOVER_BACK};
`;

export const StyledTagBoxTextSpace = styled.p`
  margin-left: 1.5rem;
  margin-right: 1.5rem;
`;
