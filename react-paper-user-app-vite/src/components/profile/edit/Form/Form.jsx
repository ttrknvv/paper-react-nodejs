import InputControl from "../../../InputControl/InputControl";
import { Button, Col, Flex, Form, Row, notification } from "antd";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerBookScheme } from "../../../../schemes/schemeHelp";
import "./index.css"

export default function FormEditProfile() {

    const { control, handleSubmit ,formState: {errors}, setError} = useForm({resolver: yupResolver(registerBookScheme)});
    
    const [form] = Form.useForm();

    const [api, contextHolder] = notification.useNotification();

    const showMessageError = (textError, numberError = '') => {
        api["error"]({
          message: `Ошибка ${numberError}`,
          description: textError,
            placement: "bottom"
        });
      };

    const onSubmit = (data) => {
        console.log('save')
    }


    const onErrorSubmit = (error) => {
        console.log("error")
        };

    return(
        <Form
                form={form}
                onFinish={handleSubmit(onSubmit, onErrorSubmit)}
                onFinishFailed={onErrorSubmit}
                className="form-style"
                scrollToFirstError>
                    {contextHolder}
                    <Row>
                        <Col span={12}>
                            <InputControl control={control} 
                                    name={"login"} 
                                    headerInput="Логин" 
                                    classNameHeaderInput={"header-input-style"}
                                    classNameInput={"input-data-style-register"}
                                    placeHolder={"Логин"}
                                    maxLength={30}
                                    minLength={5}
                                    suffixText={"Логин может состоять из латинских букв и цифр."}/>
                        </Col>
                        <Col span={12}>
                            <InputControl control={control} 
                                    name={"phoneNumber"} 
                                    headerInput="Номер телефона" 
                                    classNameHeaderInput={"header-input-style"}
                                    classNameInput={"input-data-style-register"}
                                    placeHolder={"Номер телефона"}
                                    maxLength={13}
                                    minLength={11}
                                    suffixText={"Принимаются белорусские форматы номеров: (+375, 375, 80)(25, 29, 33, 44)"}/>
                        </Col>
                    
                    </Row>
                    
                    <Row>
                        <Col span={12}>
                        <InputControl control={control} 
                                    name={"oldPassword"} 
                                    headerInput="Старый пароль" 
                                    classNameHeaderInput={"header-input-style"}
                                    classNameInput={"input-data-style-register"}
                                    placeHolder={"Старый пароль"}
                                    maxLength={50}
                                    minLength={6}
                                    type="password"/>
                            
                        </Col>

                        <Col span={12}>
                            <InputControl control={control} 
                                    name={"newPassword"} 
                                    headerInput="Новый пароль" 
                                    classNameHeaderInput={"header-input-style"}
                                    classNameInput={"input-data-style-register"}
                                    placeHolder={"Новый пароль"}
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Пожалуйста, повторите введенный вами пароль!',
                                        },
                                    ]}
                                    maxLength={50}
                                    type="password"/>
                        </Col>
                    </Row>

                    <Row>
                        <InputControl control={control} 
                                    name={"email"} 
                                    headerInput="Электронная почта" 
                                    classNameHeaderInput={"header-input-style"}
                                    classNameInput={"input-data-style-register-last"}
                                    placeHolder={"Электронная почта"}
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Пожалуйста, введите адрес электронной почты!',
                                        },
                                    ]}
                                    widthContainer="100%"
                                    suffixText={"Валидный адрес электронной почты, например: example@gmail.com"}/>
                    </Row>
                        
                        
                <Form.Item>
                    <Flex justify="center">
                        <Button className="button-style-register" type="primary" htmlType="submit">Сохранить</Button>
                    </Flex>
                </Form.Item>
            </Form>
    )
}