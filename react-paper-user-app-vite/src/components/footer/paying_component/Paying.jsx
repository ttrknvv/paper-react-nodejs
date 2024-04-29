import { Col, Row } from "antd"
import "../../../styles/stylesForComponents/footer/payingComponent/payingComponent.css"

export default function Paying()
{
    return (
        <Row>
            <Row>
                <h4>Принимаем к оплате</h4>
            </Row>
            <Row>
                <Col>
                    <img src="/ProjectImages/VisaType.png" />
                </Col>
                <Col>
                    <img src="/ProjectImages/MasterCardType.png" />
                </Col>
                <Col>
                    <img src="/ProjectImages/WorldType.png" />
                </Col>
            </Row>
        </Row>
    )
}