import Contact from "../contacts_component/Contact";
import Paying from "../paying_component/Paying";
import "../../../styles/stylesForComponents/footer/mainFooter/footer.css"
import { Col, Row } from "antd";

export default function Footer()
{
    return (
        <footer>
            <Row className="footer-style">
                <Col span={5} offset={1}>
                    <img src="/ProjectImages/LogoImage.png"/>
                </Col>
                <Col span={11}>
                    <Contact />
                </Col>
                <Col span={7}>
                    <Paying />
                </Col>
            </Row>
        </footer>
    )
}