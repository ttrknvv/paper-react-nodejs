import "../../../styles/stylesForComponents/authorization/register/register.css"
import InputControl from "../../InputControl/InputControl";
import { Button, Col, Flex, Form, Row, notification } from "antd";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export default function Register() {
    const { control, handleSubmit ,formState: {errors}, setError} = useForm();
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
        console.log(data)
        openNotificationWithIcon('error')
        };
    
    return (
        <Form
                form={form}
                onFinish={handleSubmit(onSubmit)}
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
                                    maxLength={100}
                                    minLength={3}
                                    suffixText={"Логин да да да"}/>
                        </Col>
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
                                    maxLength={100}
                                    minLength={3}
                                    type="password"/>
                        </Col>
                    
                    </Row>
                    
                    <Row>
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
                                    maxLength={100}
                                    minLength={3}
                                    suffixText={"Логин да да да"}/>
                        </Col>

                        <Col span={12}>
                            <InputControl control={control} 
                                    name={"email"} 
                                    headerInput="Электронная почта" 
                                    classNameHeaderInput={"header-input-style"}
                                    classNameInput={"input-data-style-register"}
                                    placeHolder={"Электронная почта"}
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Пожалуйста, введите электронную почту!',
                                        },
                                    ]}
                                    maxLength={100}
                                    minLength={3}
                                    suffixText={"Логин да да да"}/>
                        </Col>
                    </Row>
                        
                        
                <Form.Item>
                    <Flex justify="center">
                        <Button className="button-style-register" type="primary" htmlType="submit">Войти</Button>
                    </Flex>
                </Form.Item>
            </Form>
        
    )
}