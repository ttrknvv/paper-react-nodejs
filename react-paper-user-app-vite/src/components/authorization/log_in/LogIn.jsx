import "../../../styles/stylesForComponents/authorization/logIn/logIn.css"
import InputControl from "../../InputControl/InputControl";
import { Button, Form, Input, message } from "antd";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {logInBookScheme} from "../../../schemes/schemeHelp";

export default function LogIn()
{
    const { control, handleSubmit ,formState: {errors},} = useForm({resolver: yupResolver(logInBookScheme)} );
    const [form] = Form.useForm();

    const onSubmit = (data) => {
        console.log("success");
        console.log(data);
    }

    const onErrorSubmit = (data) => {
        console.log("error", errors)
    };

    return (
            <Form
                form={form}
                onFinish={handleSubmit(onSubmit, onErrorSubmit)}
                onFinishFailed={onErrorSubmit}
                className="form-style">
                    <InputControl control={control} 
                                    name={"login"} 
                                    headerInput="Логин" 
                                    classNameHeaderInput={"header-input-style"}
                                    classNameInput={"input-data-style"}
                                    placeHolder={"Логин"}
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Пожалуйста, введите логин пользователя!',
                                        },
                                    ]}
                                    maxLength={30}
                                    minLength={5}/>
                    <InputControl control={control} 
                                    name={"password"} 
                                    headerInput="Пароль" 
                                    classNameHeaderInput={"header-input-style"}
                                    classNameInput={"input-data-style"}
                                    placeHolder={"Пароль"}
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Пожалуйста, введите пароль пользователя!',
                                        },
                                    ]}
                                    maxLength={50}
                                    minLength={6}
                                    type="password"/>
                <Form.Item>
                    <Button className="button-style-login" type="primary" htmlType="submit">Войти</Button>
                </Form.Item>
            </Form>
    )
}