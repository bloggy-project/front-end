import { toast, ToastOptions } from 'react-toastify';

interface ToastProps {
  type: 'success' | 'error' | 'warning' | 'custom';
  message?: string;
  cratedOption?: Partial<ToastOptions>;
}

const toastOptions: ToastOptions = {
  position: 'top-right',
  autoClose: 1000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
  progress: undefined,
  theme: 'light',
};

const handleToast = ({ type, message, cratedOption }: ToastProps) => {
  switch (type) {
    case 'success':
      toast.success(message || '요청이 완료되었습니다', {
        ...toastOptions,
        ...cratedOption,
      });
      break;
    case 'error':
      toast.error(message || '다시 한 번 시도해주세요', {
        ...toastOptions,
        ...cratedOption,
      });
      break;
    case 'warning':
      toast.warn(message || '다시 한 번 확인해주세요', {
        ...toastOptions,
        ...cratedOption,
      });
      break;
  }
};

export default handleToast;
