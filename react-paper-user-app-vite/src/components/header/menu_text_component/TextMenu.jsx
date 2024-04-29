import { Button, Col } from "antd";
import { useNavigate } from "react-router-dom";
import "../../../styles/stylesForComponents/header/mainHeader/header.css"

export default function TextMenuElement({title, linkValue, isActive})
{

    const navigate = useNavigate();

    const navigateMenu = () => navigate(linkValue);

    return (
        <Col span={8}>
            <Button type="text" onClick={navigateMenu} className="style-text-element">
                <span className={"style-text-element " + (isActive ? "activeRef" : "notActiveRef")}>{title}</span>
            </Button>
        </Col>
    )
}