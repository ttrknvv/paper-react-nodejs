import LogIn from "../log_in/LogIn";
import "../../../styles/stylesForComponents/authorization/authorizationMain/authorization.css"
import Register from "../register/Register";
import { Col, Row, Tabs } from "antd";
import { useEffect } from "react";
import AuthService from "../../../services/AuthService";
import inMemoryJWT from "../../../services/inMemoryJWT";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";

export default function Authorization() {
  const {isUserLogged} = useContext(AuthContext);

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

      useEffect(()=> {
        if(isUserLogged) {
          AuthService.logout().then(() => {
            inMemoryJWT.deleteToken();
        }).catch((error) => console.log(error));
        }
      })

    return (
        <main className="authorization-container-style">
            <Row>
                <Col span={8} offset={1}>
                    <img className="image-style" src="/ProjectImages/Register.png" alt="" />
                </Col>
                <Col span={14} style={{marginLeft: "0.3%"}}>
                    <Tabs size="large" 
                          defaultActiveKey={'/signin'} 
                          items={items} />
                </Col>
            </Row>
            
        </main>
    )
}