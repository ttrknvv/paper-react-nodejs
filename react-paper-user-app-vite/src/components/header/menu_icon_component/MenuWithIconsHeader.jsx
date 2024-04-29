import IconMenu from "./IconMenu";
import {iconsMenuElements} from "/src/data/dataForMenu/dataForMenu"
import "../../../styles/stylesForComponents/header/mainHeader/header.css"
import { Row } from "antd";


export default function MenuWithIconHeader()
{
    return (
        <Row className="icons-menu" justify={"center"}>
                    {iconsMenuElements.map((element, index, array) => <IconMenu icon={element.photo} 
                                                                                linkValue={element.linkValue}
                                                                                key={index} />)}
        </Row>
    )
}