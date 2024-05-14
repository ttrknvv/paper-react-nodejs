import { Button, Col, Flex, Row } from "antd";
import { useNavigate } from "react-router-dom";
import AuthService from "../../services/AuthService";
import inMemoryJWT from "../../services/inMemoryJWT";
import "./index.css"

export default function Profile() {

    const navigate = useNavigate();

    const onEdit = () => {
        console.log("edit")
    }

    const onLogout = () => {
        console.log("logout");
        AuthService.logout().then(() => {
            inMemoryJWT.deleteToken();
            navigate("/authoriation")
        }).catch((error) => console.log(error));
    }

    return (
        <main className="main-profile-container">
            <Row>
                <Col
                    span={8}>
                    <div className="image-container">
                        <img src="/ProjectImages/testprofile.jpg" />
                    </div>
                </Col>
                <Col
                     span={15}>
                         <Row className="container-data-profile"
                              style={{paddingLeft: "2%"}}>
                            <p className="header-info">Логин</p>
                            <p className="item-info">ttrknvv</p>
                         </Row>
                         <Row className="container-data-profile"
                              style={{paddingLeft: "14%"}}>
                            <p className="header-info">Электронная почта</p>
                            <p className="item-info">chernaya.panterka.69@gmail.com</p>
                         </Row>
                         <Row className="container-data-profile"
                              style={{paddingLeft: "48%"}}>
                            <p className="header-info">Номер телефона</p>
                            <p className="item-info">+375257411803</p>
                         </Row>
                         <Row className="container-data-profile"
                              style={{paddingLeft: "76%"}}>
                            <p className="header-info">Дата регистрации</p>
                            <p className="item-info">01.02.2024</p>
                         </Row>
                         <Row className="container-data-profile">
                             <Flex align={'end'} style={{height: "100%"}}>
                                <Button type="primary" className="edit-button-profile" onClick={onEdit}>Изменить</Button>
                                <Button type="text" className="logout-button-profile" onClick={onLogout}><img src="/ProjectImages/logout.png" /></Button>
                             </Flex>
                         </Row>
                </Col>
            </Row>
        </main>
    )
}