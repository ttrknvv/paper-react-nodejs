import { Button, Col, ConfigProvider, Form, Input, Row, message } from "antd"
import { useForm, Controller } from 'react-hook-form';
import { helpMessageScheme } from "../../../schemes/schemeHelp";
import {useNavigate} from "react-router-dom"
import { yupResolver } from "@hookform/resolvers/yup";
import "../../../styles/stylesForComponents/about_us/formHelpComponent/formHelpComponent.css"

export default function FormHelp()
{
    const { control, handleSubmit, formState: {errors},} = useForm({resolver: yupResolver(helpMessageScheme)});

    const onSubmit = (data) => {
        message.success("Сообщение успешно отправлено! Ожидайте ответа в течение 3-ех рабочих дней.")
        console.log(data);
    }

    const onErrorSubmit = (data) => {
        console.log(errors);
    }

    const [form] = Form.useForm();

    return (
        <Form
            form={form}
            onFinish={onSubmit}
            onFinishFailed={onErrorSubmit}
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
                            name="url"
                            rules={[
                                    {
                                        required: true,
                                        message: 'Пожалуйста, перед отправкой сообщения опишите вашу проблему!',
                                    },
                            ]}>
                                <ConfigProvider
                                    theme={{
                                        components: {
                                            Input: {
                                                activeBg: "transparent",
                                                activeBorderColor: "#930000",
                                                hoverBg: "transparent",
                                                hoverBorderColor: "#930000",
                                                inputFontSize: "100px"
                                            },
                                        },
                                    }}>
                                <Input className="form-input-style" {...field} maxLength={2000} minLength={10} placeholder="Описать проблему" />
                                </ConfigProvider>
                        </Form.Item>} />
                </Col>
                <Col span={4} className="form-container-button-style">
                    <Form.Item>
                        <ConfigProvider
                            theme={{
                                token: {
                                    colorPrimary: '#AC7373',
                                    colorPrimaryHover: "#AC7373"
                                },
                            }}>
                                <Button className="form-button-style" type="primary" htmlType="submit">
                                    Отправить
                                </Button>
                            </ConfigProvider>
                    </Form.Item>
                </Col>
            </Row>
    </Form>
    )
}