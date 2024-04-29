import { useState } from "react";
import "../../../styles/stylesForComponents/catalog/dropDownMenu/menuSort.css"

export default function DropDownMenuSort()
{

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div id="dropdown" onClick={toggleMenu}>
            <div id="arrow-section">
                <span>Без сортировки</span>
                <img src="/ProjectImages/arrow.png"/>
            </div>
            {isOpen && (
                <div id="dropdown-content">
                <ul>
                    <li>Без сортировки</li>
                    <li>Сначала популярные</li>
                    <li>Сначала новые</li>
                    <li>Сначала старые</li>
                </ul>
                </div>
            )}
        </div>
  );
}