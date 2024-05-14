import * as yup from "yup";

export const createBookSheme = yup.object().shape({
    nameBook: yup.string().trim()
                    .max(100, "Максимальная длина названия книги 100 символов!")
                    .required("Введите название книги!"),
    authorBook: yup.string().trim()
                    .max(100, "Максимальная длина имени автора книги 100 символов!")
                    .required("Введите автора книги!"),
    genreBook: yup.string().trim()
                    .max(100, "Максимальная длина названия жанра книги 100 символов!")
                    .required("Введите жанр книги!"),
    descriptionBook: yup.string().trim()
                    .min(100, "Минимальная длина описания книги 100 символов!")
                    .max(2000, "Максимальная длина описания книги 2000 символов!")
                    .required("Введите описание книги!"),
  });