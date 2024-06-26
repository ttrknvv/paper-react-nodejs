import "../../../styles/stylesForComponents/authorization/logIn/logIn.css"
import InputControl from "../../InputControl/InputControl";
import { Button, Form, Input, message } from "antd";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {logInBookScheme} from "../../../schemes/schemeHelp";
import AuthService from "../../../services/AuthService";
import inMemoryJWT from "../../../services/inMemoryJWT";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function LogIn()
{
    const navigate = useNavigate();

    const { control, handleSubmit ,formState: {errors},} = useForm({resolver: yupResolver(logInBookScheme)} );
    const [form] = Form.useForm();

    const {setIsUserLogged} = useContext(AuthContext);

    const onSubmit = (data) => {
        console.log(data)
        AuthService.login(data)
        .then((res) => {
            const {accessToken, accessTokenExpiration} = res.data;

            inMemoryJWT.setToken(accessToken, accessTokenExpiration);

            setIsUserLogged(true)

            navigate("/")
        })
        .catch((error) => {
            console.log(error)
            setIsUserLogged(false)
        });
    }

    return (
            <Form
                form={form}
                onFinish={handleSubmit(onSubmit)}
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
                                    maxLength={30}/>
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
                                    type="password"/>
                <Form.Item>
                    <Button className="button-style-login" type="primary" htmlType="submit">Войти</Button>
                </Form.Item>
            </Form>
    )
}