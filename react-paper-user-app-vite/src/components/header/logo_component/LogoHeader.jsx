import { Button, Col, Row } from "antd"
import "../../../styles/stylesForComponents/header/mainHeader/header.css"
import logoHeader from '/ProjectImages/LogoImage.png'
import {useNavigate} from 'react-router-dom'

export default function LogoHeader()
{
    const navigate = useNavigate();

    return(
        <button className="logo-button" onClick={() => navigate("/")}>
            <Row>
                <Col span={5}>
                    <img src={logoHeader} alt={'Logo'} className="logo-image-style" />
                </Col>
                <Col span={19}>
                    <span className="logo-text-style">Бумажный город</span>
                </Col>
            </Row>
        </button>
    )
} 