import TextMenuElement from "./TextMenu";
import {textMenuElements} from "/src/data/dataForMenu/dataForMenu"
import "../../../styles/stylesForComponents/header/mainHeader/header.css"
import { useState } from "react";
import { useEffect } from "react";
import { Row, Space } from "antd";
import { useLocation } from "react-router-dom";


export default function MenuWithTextHeader()
{
    const [activeIndex, setActiveIndex] = useState(null);

    const location = useLocation();

    useEffect(() => {
        const pathname = location.pathname;
        const index = textMenuElements.findIndex(
          (element) => element.linkValue === pathname
        );
        setActiveIndex(index);
      }, [location.pathname]);

    return (
            <Row className="text-menu">
                    {textMenuElements.map((element, index) => <TextMenuElement title = {element.title} 
                                                                               linkValue = {element.linkValue} 
                                                                               isActive={activeIndex === index}
                                                                               key = {index} />)}
            </Row>
    )
}