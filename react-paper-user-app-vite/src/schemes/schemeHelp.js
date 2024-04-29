import * as yup from "yup";

export const helpMessageScheme = yup.object().shape({
    helpMessage: yup.string().required("Для отправки сообщения, распишите подробно о проблеме, с которой вы столкнулись!")
  });