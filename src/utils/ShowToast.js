import { toast } from "react-toastify";

export const showToast = (toastTheme, toastMsg) => {
  toast[toastTheme](toastMsg, {
    position: "bottom-right",
    autoClose: 2500,
    closeOnClick: true,
    newestOnTop: true,
    hideProgressBar: true,
    theme: "colored",
  });
};