import LogIn from "../log_in/LogIn";
import "../../../styles/stylesForComponents/authorization/authorizationMain/authorization.css"
import Register from "../register/Register";
import { Col, Row, Tabs } from "antd";
import { useNavigate } from "react-router-dom";

export default function Authorization() {

    const navigate = useNavigate();

    const items = [
        {
          key: '/signin',
          label: 'Вход',
          children: (<LogIn />),
        },
        {
            key: '2',
            label: '|',
            disabled: true,
        },
        {
          key: '/signup',
          label: 'Регистрация',
          children: (<Register />),
        },
      ];

      const handleTabSelect = (item) => navigate(item) 

    return (
        <main className="authorization-container-style">
            <Row>
                <Col span={8} offset={1}>
                    <img className="image-style" src="/ProjectImages/Register.png" alt="" />
                </Col>
                <Col span={14} style={{marginLeft: "0.3%"}}>
                    <Tabs size="large" 
                          defaultActiveKey={window.location.pathname} 
                          items={items}
                          onChange={handleTabSelect} />
                </Col>
            </Row>
            
        </main>
    )
}