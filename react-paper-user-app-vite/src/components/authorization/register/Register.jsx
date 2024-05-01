import "../../../styles/stylesForComponents/authorization/register/register.css"
import InputControl from "../../InputControl/InputControl";
import { Button, Col, Flex, Form, Row, notification } from "antd";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerBookScheme } from "../../../schemes/schemeHelp";

export default function Register() {
    const { control, handleSubmit ,formState: {errors}, setError} = useForm({resolver: yupResolver(registerBookScheme)});
    const [form] = Form.useForm();

    const [api, contextHolder] = notification.useNotification();

    const openNotificationWithIcon = (type) => {
        api[type]({
          message: 'Notification Title',
          description:
            'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
            placement: "bottom"
        });
      };

    const onSubmit = (data) => {
        console.log("success");
        console.log(data);
        openNotificationWithIcon('success')
    }


    const onErrorSubmit = (data) => {
        console.log("error", errors)
        openNotificationWithIcon('error')
        };
    
    return (
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
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Пожалуйста, введите логин!',
                                        },
                                    ]}
                                    maxLength={30}
                                    minLength={5}
                                    suffixText={"Логин да да да"}/>
                        </Col>
                        <Col span={12}>
                            <InputControl control={control} 
                                    name={"phoneNumber"} 
                                    headerInput="Номер телефона" 
                                    classNameHeaderInput={"header-input-style"}
                                    classNameInput={"input-data-style-register"}
                                    placeHolder={"Номер телефона"}
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Пожалуйста, введите номер телефона!',
                                        },
                                    ]}
                                    maxLength={13}
                                    minLength={11}
                                    suffixText={"Логин да да да"}/>
                        </Col>
                    
                    </Row>
                    
                    <Row>
                        <Col span={12}>
                        <InputControl control={control} 
                                    name={"password"} 
                                    headerInput="Пароль" 
                                    classNameHeaderInput={"header-input-style"}
                                    classNameInput={"input-data-style-register"}
                                    placeHolder={"Пароль"}
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Пожалуйста, введите пароль!',
                                        },
                                    ]}
                                    maxLength={50}
                                    minLength={6}
                                    type="password"/>
                            
                        </Col>

                        <Col span={12}>
                            <InputControl control={control} 
                                    name={"acceptPassword"} 
                                    headerInput="Подтверждение пароля" 
                                    classNameHeaderInput={"header-input-style"}
                                    classNameInput={"input-data-style-register"}
                                    placeHolder={"Пароль"}
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Пожалуйста, введите электронную почту!',
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
                                            message: 'Пожалуйста, введите электронную почту!',
                                        },
                                    ]}
                                    widthContainer="100%"
                                    suffixText={"Логин да да да"}/>
                    </Row>
                        
                        
                <Form.Item>
                    <Flex justify="center">
                        <Button className="button-style-register" type="primary" htmlType="submit">Войти</Button>
                    </Flex>
                </Form.Item>
            </Form>
        
    )
}