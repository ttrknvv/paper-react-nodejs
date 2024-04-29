import CardBook from "../card_book/CardBook";
import "../../../styles/stylesForComponents/catalog/mainCatalog/catalog.css"
import DropDownMenuSort from "../drop_down_menu/DropDownMenuSort";

export default function Catalog() {
    return (
        <main id="catalog-component">
            <DropDownMenuSort />
            <div id="catalog-component">
                <CardBook />
                <CardBook />
                <CardBook />
                <CardBook />
                <CardBook />
                <CardBook />
                <CardBook />
           </div>
        </main>
        
    )
}