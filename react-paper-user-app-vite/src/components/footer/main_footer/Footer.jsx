import Contact from "../contacts_component/Contact";
import Paying from "../paying_component/Paying";
import "../../../styles/stylesForComponents/footer/mainFooter/footer.css"
import { Col, Row } from "antd";

export default function Footer()
{
    return (
        <footer>
            <Row className="footer-style">
                <Col span={3}>
                    <img src="/ProjectImages/LogoImage.png"/>
                </Col>
                <Col span={15}>
                    <Contact />
                </Col>
                <Col span={6}>
                    <Paying />
                </Col>
            </Row>
        </footer>
    )
}