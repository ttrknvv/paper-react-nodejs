import "./index.css"
import { Button, Col, Form, Input, Row, message, notification, Rate } from "antd"
import { useForm, Controller } from 'react-hook-form';
import { reviewTextBook } from "../../../schemes/schemeHelp";
import { yupResolver } from "@hookform/resolvers/yup";
import { BookOutlined } from '@ant-design/icons';
import React from "react";
import { useState } from "react";

export default function FormReviewBook()
{
    const { control, handleSubmit, formState: {errors}} = useForm({resolver: yupResolver(reviewTextBook)});

    const [api, contextHolder] = notification.useNotification();
    const [messageApi, contextHolderMessage] = message.useMessage();

    const [rateValue, setRateValue] = useState(0);

    const showMessageError = (textError, numberError = '') => {
        api["error"]({
          message: `Ошибка ${numberError}`,
          description: textError,
            placement: "bottom"
        });
      };

    const key = 'updatable';
    const success = () => {
        
        messageApi.open({
            key,
            type: 'loading',
            content: 'Отправка отзыва...',
            duration: 0
          });

          setTimeout(() => {messageApi.open({
            key, 
            type: 'success',
            content: "Отзыв успешно оставлен!"
          })}, 2000)
          
    };
    const onSubmit = (data) => {
        success('dddd');
        console.log(data, rateValue);
    }

    const onErrorSubmit = (error) => {
        if(!!error.errorFields) {
            showMessageError(error.errorFields[0].errors);
        }
        else {
            const key = Object.keys(error)[0]
            showMessageError(error[key].message)
        }
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
                        <h1 className="header-form">Отзывы о книге "Ход королевы"</h1>
                    </Form.Item>
                </Col>
                <Col span={4}/>
            </Row>
            <Row className="container-style">
                <Col span={22}>
                    <Form.Item name={'rate'}>
                        <Rate className="rate-review-put" character={<BookOutlined />} allowHalf onChange={setRateValue} value={rateValue}  />
                    </Form.Item>
                </Col>
            </Row>
            <Row className="container-style">
                <Col span={18}>
                <Controller
                    name="reviewText"
                    control={control}
                    render={({field}) => 
                        <Form.Item
                            name={"reviewText"}
                            rules={[
                                    {
                                        required: true,
                                        message: 'Пожалуйста, перед отправкой отзыва опишите ваши впечатления!',
                                    },
                            ]}>
                                <Input className="form-input-style" 
                                    {...field} 
                                    maxLength={2000}
                                    minLength={10}  
                                    showCount
                                    placeholder="Оставить отзыв"
                                     />
                        </Form.Item>} />
                </Col>
                <Col span={4} className="form-container-button-style">
                    <Form.Item>
                                <Button className="form-button-style" type="primary" htmlType="submit">
                                    {contextHolderMessage}
                                    {contextHolder}
                                    Отправить
                                </Button>
                    </Form.Item>
                </Col>
            </Row>
    </Form>
    )
}