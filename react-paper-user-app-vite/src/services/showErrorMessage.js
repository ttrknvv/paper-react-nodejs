import { notification } from "antd";

export default showErrorMessage = (error) => {
    const [api, contextHolder] = notification.useNotification();

    api["error"]({
      message: 'Ошибка',
      description:
        error.response.data.error,
        placement: "bottom"
    });
  };