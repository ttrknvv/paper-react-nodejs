import { Button, Col, ConfigProvider, Row } from "antd";
import logoHeader from '/ProjectImages/notFound404.png'
import "../../styles/stylesForComponents/notFound/notFound.css"
import { useNavigate } from "react-router-dom";

export default function NotFound() {
    const navigate = useNavigate();

   return (
       <Row>
           <Col span={10}  offset={1}>
                <img src={logoHeader} className={"img-style"}/>
           </Col>
           <Col span={13} className="conteiner-block-info">
                <div className="block-info">
                    <Row className="h1-style">
                        <h1>К сожалению, запрашиваемая Вами страница не найдена. . .</h1>
                    </Row>
                    <Row className="p-style">
                        <p>Вернитесь, пожалуйста, на главную страницу!)</p>
                    </Row>
                    <Row className="button-style-main">
                            <Button type="primary" htmlType="button" onClick={() => navigate("/")}>Главная страница</Button>
                    </Row>
                </div>
                
           </Col>
       </Row>
          )
}