import { Palette } from '@/assets/color';
import { ToastContainer } from 'react-toastify';
import styled from 'styled-components';

export const StyledToast = styled(ToastContainer)`
  .Toastify__toast {
    font-size: 1.4rem;
    border-radius: 1rem;
    padding: 1.2rem;
  }

  .Toastify__toast-icon {
    & > svg {
      fill: ${Palette.SPOT1};
    }
  }

  .Toastify__progress-bar--success {
    background-color: ${Palette.SPOT1};
  }
`;
