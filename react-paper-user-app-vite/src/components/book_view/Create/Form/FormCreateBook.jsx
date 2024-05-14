import InputControl from "../../../InputControl/InputControl";
import { Button, Col, Flex, Form, Row, notification, Upload, Space, Dropdown, InputNumber, message } from "antd";
import { InboxOutlined, DownOutlined } from '@ant-design/icons';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { subscriptionItems } from "../../../../data/dataForCreateBook/dataForCreateBook";
import "./index.css"
import BooksAdminService from "../../../../services/BooksAdminService";
import { createBookSheme } from "../../../../schemes/bookSheme";
import { useState } from "react";

export default function FormCreateBook() {

    const { control, handleSubmit ,formState: {errors}, setError} = useForm({resolver: yupResolver(createBookSheme)});
    
    const [form] = Form.useForm();

    const [api, contextHolder] = notification.useNotification();

    const [typeSub, setTypeSub] = useState(1);
    const [popularity, setPopularity] = useState(0);
    const [fileDataBook, setFileDataBook] = useState({});
    const [fileImageBook, setFileImageBook] = useState({});


    const showMessage = (type, textError, numberError = '') => {
        api[type]({
          message: `Ошибка ${numberError}`,
          description: textError,
            placement: "bottom"
        });
      };

    const onSubmit = (data) => {
        if(!fileDataBook) {
            showMessage('error', "Добавьте файл книги!")
            return;
        }
        
        if(!fileImageBook) {
            showMessage('error', "Добавьте изображение книги!")
            return;
        }

        const dataCreateBook = new FormData();
        dataCreateBook.append('nameBook', data.nameBook);
        dataCreateBook.append('descriptionBook', data.descriptionBook);
        dataCreateBook.append('subscriptionType', typeSub.key ? typeSub.key : typeSub);
        dataCreateBook.append('genreBook', data.genreBook);
        dataCreateBook.append('startPopularity', popularity);
        dataCreateBook.append('imageBook', fileImageBook);
        dataCreateBook.append('dataBook', fileDataBook);
        dataCreateBook.append('authorBook', data.authorBook);

        BooksAdminService.createBook(dataCreateBook)
        .then((res) => {
            console.log("good")
            showMessage('success', `Книга "${data.nameBook}" успешно добавлена!`)
        })
        .catch((error) => {
            showMessage('error', error.response.data.error, error.response.data.status)
        })
    }


    const onErrorSubmit = (error) => {
        if(!!error.errorFields) {
            showMessage('error', error.errorFields[0].errors);
        }
        else {
            const key = Object.keys(error)[0]
            showMessage('error', error[key].message)
        }
        };
    
    const propsMenu = {
        items: subscriptionItems,
        onClick: setTypeSub,
        selectable: true,
        defaultSelectedKeys: ['1']
      };

      const onChangeImage = (event) => {
          if(!event.target.files[0]) {
            setFileImageBook(null)
            return;
          }

          const types = ['image/png', 'image/jpeg', 'image/jpg']

          if(!types.includes(event.target.files[0].type)) {
            showMessage('error', 'Поддерживаемые файлы изображения: png, jpg, jpeg!');
            event.target.files = undefined;
            event.target.value = '';
            setFileImageBook(null)
            return;
          }
          console.log(event.target.files[0])
          setFileImageBook(event.target.files[0])
      }

      const onChangeData = (event) => {
        if(!event.target.files[0]) {
            setFileDataBook(null)
            return;
          }

        const types = ['application/pdf']

        if(!types.includes(event.target.files[0].type)) {
          showMessage('error', 'Поддерживаемые файлы книги: pdf!');
          event.target.files = undefined; 
          event.target.value = '';
          setFileDataBook(null)
          return;
        }
        setFileDataBook(event.target.files[0])
    }

    return (
        <Form
                form={form}
                onFinish={handleSubmit(onSubmit, onErrorSubmit)}
                onFinishFailed={onErrorSubmit}
                className="form-style-create-book"
                scrollToFirstError>
                    {contextHolder}
                    <Flex vertical align={'center'} justify='center' gap={'1vh'} style={{width: '100%'}}>
                            <InputControl control={control} 
                                    name={"nameBook"} 
                                    headerInput="Название книги" 
                                    classNameHeaderInput={"header-input-style"}
                                    classNameInput={"input-data-style-create-book"}
                                    placeHolder={"Название книги..."}
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Пожалуйста, введите название книги!',
                                        },
                                    ]}
                                    maxLength={100}
                                    minLength={1}
                                    suffixText={"Длина названия книги от 1 символа до 100."}/>
                            <InputControl control={control} 
                                    name={"authorBook"} 
                                    headerInput="Автор книги" 
                                    classNameHeaderInput={"header-input-style"}
                                    classNameInput={"input-data-style-create-book"}
                                    placeHolder={"Автор книги..."}
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Пожалуйста, введите автора книги!',
                                        },
                                    ]}
                                    maxLength={100}
                                    minLength={1}
                                    suffixText={"Длина имени автора книги от 1 символа до 100."}/>
                            <InputControl control={control} 
                                    name={"genreBook"} 
                                    headerInput="Жанр книги" 
                                    classNameHeaderInput={"header-input-style"}
                                    classNameInput={"input-data-style-create-book"}
                                    placeHolder={"Жанр книги..."}
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Пожалуйста, введите жанр книги!',
                                        },
                                    ]}
                                    maxLength={100}
                                    minLength={1}
                                    suffixText={"Длина названия жанра книги от 1 символа до 100."}/>
                        <InputControl control={control} 
                                    name={"descriptionBook"} 
                                    headerInput="Описание книги" 
                                    classNameHeaderInput={"header-input-style"}
                                    classNameInput={"input-data-style-create-book-description"}
                                    placeHolder={"Описание книги..."}
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Пожалуйста, введите описание книги!',
                                        },
                                    ]}
                                    maxLength={2000}
                                    minLength={100}
                                    type='textArea'
                                    otherFields={{rows: 6}} />
                        <Form.Item style={{width: "100%"}} name={"subType"}>
                            <Flex justify={"space-between"} style={{width: "100%"}}>
                                <Space wrap>
                                    <Dropdown className="menu-style-sub" menu={propsMenu} placement="bottom">
                                        <Button className="button-in-menu">
                                            <Space>
                                                {'Выбор подписки'}
                                                <DownOutlined />
                                            </Space>
                                        </Button>
                                    </Dropdown>
                                </Space>
                                <Flex style={{width: "max-content"}} align='center' justify={'flex-end'} gap="4%">
                                    <span>Желаемый стартовый КП:</span>
                                    <InputNumber onChange={setPopularity} className="menu-style-pop" min={0} max={100} defaultValue={0} />

                                </Flex>
                            </Flex>
                        </Form.Item>
                        <Form.Item label={'Выберите изображение книги'}>
                            <input name="imageBook" type='file' accept="image/png, image/jpeg, image/jpg" onChange={onChangeImage} />
                        </Form.Item>
                        <Form.Item label={'Выберите файл книги(pdf)'}>
                            <input name="dataBook" type='file' accept="application/pdf" onChange={onChangeData} />
                        </Form.Item>
                    </Flex> 
                    
                <Form.Item>
                    <Flex justify="center">
                        <Button className="button-style-register" type="primary" htmlType="submit">Добавить книгу</Button>
                    </Flex>
                </Form.Item>
            </Form>
    )
}