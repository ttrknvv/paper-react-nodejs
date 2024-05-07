import { Button, Col, Form, Input, Row, Tooltip, message } from "antd"
import { InfoCircleOutlined } from '@ant-design/icons';
import { useForm, Controller } from 'react-hook-form';
import { helpMessageScheme } from "../../../schemes/schemeHelp";
import { yupResolver } from "@hookform/resolvers/yup";
import "../../../styles/stylesForComponents/about_us/mainAboutUs/mainAboutUs.css"
import React from "react";

export default function FormHelp()
{
    const { control, handleSubmit, formState: {errors},} = useForm({resolver: yupResolver(helpMessageScheme)});

    const [messageApi, contextHolder] = message.useMessage();
    const key = 'updatable';
    const success = () => {
        
        messageApi.open({
            key,
            type: 'loading',
            content: 'Отправка сообщения...',
            duration: 0
          });

          setTimeout(() => {messageApi.open({
            key, 
            type: 'success',
            content: "Сообщение успешно отправлено! Ожидайте ответа в течение 3-ех рабочих дней."
          })}, 2000)
          
    };
    const onSubmit = (data) => {
        success('dddd');
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
            onFinish={handleSubmit(onSubmit, onErrorSubmit)}
            onFinishFailed={onErrorSubmit}
            autoComplete="off"
            className="form-style">
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
                                <Input className="form-input-style" 
                                    {...field} 
                                    maxLength={2000}
                                    minLength={10}  
                                    showCount
                                    placeholder="Описать проблему"
                                    suffix={
                                        <Tooltip title={"Опишите подробно вашу проблему."}>
                                            <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                                        </Tooltip>} />
                        </Form.Item>} />
                </Col>
                <Col span={4} className="form-container-button-style">
                    <Form.Item>
                                <Button className="form-button-style" type="primary" htmlType="submit">
                                    {contextHolder}
                                    Отправить
                                </Button>
                    </Form.Item>
                </Col>
            </Row>
    </Form>
    )
}