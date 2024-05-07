import * as yup from "yup";

export const helpMessageScheme = yup.object().shape({
    helpMessage: yup.string().trim().min(10, "Маленько").max(2000, "Максимально").required("Для отправки сообщения, распишите подробно о проблеме, с которой вы столкнулись!")
  });

export const logInBookScheme = yup.object().shape({
  login: yup.string().trim().required("Нет логина"),
  password: yup.string().trim().required("Нет пароля")
});

export const registerBookScheme = yup.object().shape({
  login: yup.string().trim()
        .min(5, "Минимальная количество символов в логине: 5!")
        .max(30, "Максимальное количество символов в логине: 30!")
        .matches(/^[a-zA-Z][a-zA-Z0-9]*$/, 'Логин может содержать только строчные и прописные латинские буквы и цифры!')
        .required("Пожалуйста, введите логин!"),
  password: yup.string().trim()
            .min(6, "Минимальная количество символов в пароле: 6!")
            .max(50, "Максимальное количество символов в пароле: 50!")
            .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/, 'Пароль должен содержать хотя бы одну строчную букву, одну прописную букву и одну цифру!')
            .required("Пожалуйста, введите пароль!"),
  phoneNumber: yup.string().trim()
                  .min(11, "Номер телефона введен неверно!")
                  .max(13, "Номер телефона введен неверно!")
                  .matches(/^(?:\+375|375|80)(?:29|44|33|25)\d{7}$/, 'Номер телефона введен неверно!')
                  .required("Пожалуйста, введите номер телефона!"),
  acceptPassword: yup.string().trim()
                      .required("Пожалуйста, повторите введенный вами пароль!"),
  email: yup.string().trim()
            .email("Пожалуйста, введите верный адрес электронной почты!")
            .required("Пожалуйста, введите адрес электронной почты!")
});
