import { toast } from "react-toastify";

type Notification = {
    message: string;
    type: "success" | "error";
}

export const customNotification = (notification: Notification): void => {
    toast.info(notification.message, {
        closeButton: true,
        theme: "colored",
        type: notification.type,
        autoClose: 3000,
        position: "top-right",
        hideProgressBar: false,
        closeOnClick: false,
        rtl: false,
        pauseOnFocusLoss: true,
        draggable: false,
        pauseOnHover: true
    });
}