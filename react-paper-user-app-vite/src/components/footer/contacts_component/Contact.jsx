import { Col, Row } from "antd"
import "../../../styles/stylesForComponents/footer/mainFooter/footer.css"

export default function Contact()
{
    return(
        <Row className="contacts-style">
            <Row>
                    <h4>Служба поддержки</h4>
            </Row>
            <Row>
                    <p>+375257411803 tarakanov.work@gmail.com</p>
            </Row>
        </Row>
    )
}