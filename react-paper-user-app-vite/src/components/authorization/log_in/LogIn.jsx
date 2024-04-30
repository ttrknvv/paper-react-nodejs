import "../../../styles/stylesForComponents/authorization/logIn/logIn.css"
import InputControl from "../../InputControl/InputControl";
import { Button, Form } from "antd";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export default function LogIn()
{
    const { control, handleSubmit ,formState: {errors},} = useForm();
    const [form] = Form.useForm();

    const onSubmit = (data) => {
        console.log("success");
        console.log(data);
    }

    return (
            <Form
                form={form}
                onFinish={handleSubmit(onSubmit)}
                className="form-style">
                <InputControl control={control} 
                              name={"login"}
                              rules={[
                                {
                                    required: true,
                                    message: 'Пожалуйста, введите логин пользователя!',
                                },]}
                               maxLength={100}
                               minLength={4}
                               placeHolder={"Логин"}
                               classNameInput={"input-data-style"}
                               headerInput="Логин"
                               classNameHeaderInput="header-input-style" />
                <InputControl control={control} 
                              name={"password"}
                              rules={[
                                {
                                    required: true,
                                    message: 'Пожалуйста, введите пароль пользователя!',
                                },]}
                               maxLength={100}
                               minLength={4}
                               placeHolder={"Пароль"}
                               type="password" 
                               classNameInput={"input-data-style"} />
                <Form.Item>
                    <Button className="button-style" type="primary" htmlType="submit">Войти</Button>
                </Form.Item>
            </Form>
    )
}