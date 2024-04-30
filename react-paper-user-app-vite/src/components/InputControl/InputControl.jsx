import { Input, Form } from "antd";
import { Controller } from "react-hook-form";


export default function InputControl({name, 
    control, 
    rules, 
    maxLength, 
    minLength, 
    placeHolder, 
    type = "default", 
    classNameInput,
    headerInput,
    classNameHeaderInput})
{
        switch(type) {
            case "default":
                return (<Controller
                    name={name}
                    control={control}
                    render={({field}) => 
                        <Form.Item
                            name={name}
                            rules={rules}
                            style={{marginBottom: "4%"}}>
                                {headerInput && <><div className={classNameHeaderInput} style={{marginBottom: "1%"}}>{headerInput}</div></>}
                                <Input {...field} className={classNameInput} maxLength={maxLength} minLength={minLength} placeholder={placeHolder} />
                        </Form.Item>} />
                );
            case "password":
                return (<Controller
                    name={name}
                    control={control}
                    render={({field}) => 
                        <Form.Item
                            name={name}
                            rules={rules}
                            style={{marginBottom: "4%"}}>
                                <Input.Password {...field} className={classNameInput} maxLength={maxLength} minLength={minLength} placeholder={placeHolder} />
                        </Form.Item>} />)
        }
}