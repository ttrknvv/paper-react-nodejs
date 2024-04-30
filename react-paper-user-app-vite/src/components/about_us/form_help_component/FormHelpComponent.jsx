import { Button, Col, Form, Input, Row, message } from "antd"
import { useForm, Controller } from 'react-hook-form';
import { helpMessageScheme } from "../../../schemes/schemeHelp";
import { yupResolver } from "@hookform/resolvers/yup";
import "../../../styles/stylesForComponents/about_us/mainAboutUs/mainAboutUs.css"

export default function FormHelp()
{
    const { control, handleSubmit ,formState: {errors},} = useForm({resolver: yupResolver(helpMessageScheme)});

    const onSubmit = (data) => {
        message.success("Сообщение успешно отправлено! Ожидайте ответа в течение 3-ех рабочих дней.")
        console.log(data);
    }

    const onErrorSubmit = (data) => {
        console.log("errors");
        console.log(errors);
    }

    const [form] = Form.useForm();

    return (
        <Form
            form={form}
            onFinish={handleSubmit(onSubmit)}
            onFinishFailed={ onErrorSubmit}
            autoComplete="off"
            className="form-style"
        >
            <Row className="container-style">
                <Col span={18}>
                    <Form.Item>
                        <h1 className="header-form">Служба поддержки</h1>
                    </Form.Item>
                </Col>
                <Col span={4}/>
            </Row>
            <Row className="container-style">
                <Col span={18}>
                <Controller
                    name="helpMessage"
                    control={control}
                    render={({field}) => 
                        <Form.Item
                        name={"helpMessage"}
                            rules={[
                                    {
                                        required: true,
                                        message: 'Пожалуйста, перед отправкой сообщения опишите вашу проблему!',
                                    },
                            ]}>
                                <Input className="form-input-style" {...field} maxLength={2000} minLength={10} placeholder="Описать проблему" />
                        </Form.Item>} />
                </Col>
                <Col span={4} className="form-container-button-style">
                    <Form.Item>
                                <Button className="form-button-style" type="primary" htmlType="submit">
                                    Отправить
                                </Button>
                    </Form.Item>
                </Col>
            </Row>
    </Form>
    )
}