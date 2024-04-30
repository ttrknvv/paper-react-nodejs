import { Input, Form } from "antd";
import { Controller } from "react-hook-form";
import "./index.css"


export default function InputControl({
    name, 
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
                        <div>
                            {headerInput && <><div className={classNameHeaderInput} style={{marginBottom: "1%"}}>{headerInput}</div></>}
                            <Form.Item
                                name={name}
                                rules={rules}
                                >
                                    <Input className={classNameInput} {...field} maxLength={maxLength} minLength={minLength} placeholder={placeHolder} />
                            </Form.Item> 
                        </div>}/>
                );
            case "password":
                return (<Controller
                    name={name}
                    control={control}
                    render={({field}) => 
                            <div>
                                {headerInput && <><div className={classNameHeaderInput} style={{marginBottom: "1%"}}>{headerInput}</div></>}
                                <Form.Item
                                    name={name}
                                    rules={rules}>
                                        <Input.Password {...field} className={classNameInput} maxLength={maxLength} minLength={minLength} placeholder={placeHolder} autoComplete="off" />
                                </Form.Item>
                            </div>} />)
        }
}