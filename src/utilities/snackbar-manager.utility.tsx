import { toast, ToastContainer } from 'react-toastify';

export function SnackbarUtilitiesConfigurator() {
  return <ToastContainer />;
}

export const SnackBarUtilities = {
  default(msg: string) {
    toast(msg);
  },
  success(msg: string) {
    toast.success(msg);
  },
  error(msg: string) {
    toast.error(msg);
  },
  info(msg: string) {
    toast.info(msg);
  },
  warning(msg: string) {
    toast.warn(msg);
  },
};
