import LogIn from "../log_in/LogIn";
import "../../../styles/stylesForComponents/authorization/authorizationMain/authorization.css"
import Register from "../register/Register";
import { Col, Row, Tabs } from "antd";

export default function Authorization() {
    const items = [
        {
          key: '1',
          label: 'Вход',
          children: (<LogIn />),
        },
        {
          key: '2',
          label: 'Регистрация',
          children: (<Register />),
        },
      ];

    return (
        <main className="authorization-container-style">
            <Row>
                <Col span={8} offset={1}>
                    <img className="image-style" src="/ProjectImages/Register.png" alt="" />
                </Col>
                <Col span={15}>
                    <Tabs defaultActiveKey="1" items={items} />
                </Col>
            </Row>
            
        </main>
    )
}