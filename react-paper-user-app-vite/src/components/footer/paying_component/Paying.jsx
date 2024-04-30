import { Col, Row } from "antd"
import "../../../styles/stylesForComponents/footer/mainFooter/footer.css"

export default function Paying()
{
    return (
        <Row className="paying-style">
            <Row>
                <h4>Принимаем к оплате</h4>
            </Row>
            <Row className="icons-container-style">
                <Col span={5}>
                    <img src="/ProjectImages/VisaType.png" />
                </Col>
                <Col span={4}> 
                    <img src="/ProjectImages/MasterCardType.png" />
                </Col>
                <Col span={4    }>
                    <img src="/ProjectImages/WorldType.png" />
                </Col>
            </Row>
        </Row>
    )
}