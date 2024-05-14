import { Button, Col, Flex, Row } from "antd";
import FormEditProfile from "./Form/Form";
import {
    ArrowLeftOutlined
  } from '@ant-design/icons';
import './index.css'
import { useNavigate } from "react-router-dom";

export default function EditProfile() {
    const navigate = useNavigate();
    const onEditPhoto = () => console.log("edit photo")
    const onBack = () => navigate('/profile')
    return (
        <main style={{height: "max-content",marginTop: "2%"}}>
            <Row style={{height: "max-content"}}>
                <Col span={2}>
                    <Button className="nav-back-style" type="text" onClick={onBack}><img style={{height: "100%", width: "100%"}} src="/ProjectImages/leftarrow.png" /></Button>
                </Col>
                <Col span={7}>
                    <Flex vertical align={"center"} justify="center" gap={"3vh"}>
                        <div className="container-img-edit">
                            <img src="/ProjectImages/testprofile.jpg" />
                        </div>
                        <Button className="button-edit-photo" type="primary" onClick={onEditPhoto}>Изменить фото</Button>
                    </Flex>
                    
                </Col>
                <Col span={15} style={{paddingLeft: "1%"}}>
                    <FormEditProfile />
                </Col>
            </Row>
        </main>
    )
}