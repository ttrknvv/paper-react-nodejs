import { Button, Col } from "antd";
import { useNavigate } from "react-router-dom";
import "../../../styles/stylesForComponents/header/mainHeader/header.css"

export default function IconMenu({icon, linkValue}) {
    const navigate = useNavigate();

    return (
            <Col span={6} offset={1} className={"style-for-col"}>
                <Button type="text" className="button-menu" onClick={() => navigate(linkValue)}>
                    <img className="ref-icons" src={icon} />
                </Button>
            </Col>
    )
}