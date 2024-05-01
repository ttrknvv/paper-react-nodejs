import * as yup from "yup";

export const helpMessageScheme = yup.object().shape({
    helpMessage: yup.string().min(10, "Маленько").max(2000, "Максимально").required("Для отправки сообщения, распишите подробно о проблеме, с которой вы столкнулись!")
  });

export const logInBookScheme = yup.object().shape({
  login: yup.string().min(5, "Маленько").max(30, "Максимально").required("Нет логина"),
  password: yup.string().min(6, "Маленько").max(50, "Максимально")
});

export const registerBookScheme = yup.object().shape({
  login: yup.string()
        .min(5, "Маленько")
        .max(30, "Максимально")
        .matches(/^[a-zA-Z][a-zA-Z0-9]*$/, 'Логин может содержать только латинские буквы и цифры')
        .required("Нет логина"),
  password: yup.string()
            .min(6, "Маленько")
            .max(50, "Максимально")
            .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/, 'Пароль должен содержать хотя бы одну маленькую букву, одну большую букву и одну цифру')
            .required("Нет пароля"),
  phoneNumber: yup.string()
                  .min(11, "Введите номер телефона полностью")
                  .max(13, "Проверьте нормер телефона")
                  .matches(/^(?:\+375|375|80)(?:29|44|33|25)\d{7}$/, 'Неверный номер телефона')
                  .required("Нет телефона"),
  acceptPassword: yup.string().required("нет подтверждения"),
  email: yup.string().email().required("нет почты")
});
