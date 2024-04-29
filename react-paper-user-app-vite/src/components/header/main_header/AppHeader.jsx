import { Col, Row } from "antd";
import LogoHeader from "../logo_component/LogoHeader";
import MenuWithIconHeader from "../menu_icon_component/MenuWithIconsHeader";
import MenuWithTextHeader from "../menu_text_component/MenuWithTextHeader";
import "../../../styles/stylesForComponents/header/mainHeader/header.css"

export default function AppHeader()
{

    return (
        <header className="header-component-style">
            <Row>
                <Col span={9}>
                    <LogoHeader />
                </Col>
                <Col span={10}>
                    <MenuWithTextHeader />
                </Col>
                <Col span={5}>
                    <MenuWithIconHeader />
                </Col>
            </Row>
        </header>
    )
}