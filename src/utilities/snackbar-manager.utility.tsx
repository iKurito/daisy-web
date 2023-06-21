import { Id, toast, ToastContainer, TypeOptions } from 'react-toastify';

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
  loading(msg: string) {
    return toast.loading(msg);
  },
  update(id: Id, msg: string, type: TypeOptions) {
    toast.update(id, {
      render: msg,
      type,
      isLoading: false,
      autoClose: 5000,
      closeOnClick: true,
      closeButton: true,
    });
  },
};
