import CardBook from "../card_book/CardBook";
import "../../../styles/stylesForComponents/catalog/mainCatalog/catalog.css"
import DropDownMenuSort from "../drop_down_menu/DropDownMenuSort";
import { Button, Cascader, Dropdown, Flex, Input, Menu, Space } from "antd";
import { DownOutlined } from '@ant-design/icons';


export default function Catalog() {
    const items = [
        {
          label: '1st menu item',
          key: '1',
        },
        {
          label: '2nd menu item',
          key: '2',
        },
        {
          label: '3rd menu item',
          key: '3',
        },
        {
          label: '4rd menu item',
          key: '4',
        },
      ];

      const menuProps = {
        items,
        onClick: (e) => console.log("click ", e),
      };

      const {Search} = Input;

      const menu = (
        <Menu>
          <Menu.Item key="1">Option 1</Menu.Item>
          <Menu.Item key="2">Option 2</Menu.Item>
          <Menu.Item key="3">Option 3</Menu.Item>
          <Menu.Item key="3">Option 3</Menu.Item>

        </Menu>
      );

    return (
        <main id="catalog-component">
            <Flex wrap gap={"8%"} align="center" style={{margin: "2% 3% 0 4%"}}>
                <DropDownMenuSort propsMenu={menuProps}
                    nameMenu={"Без сортировки"}/>
                <DropDownMenuSort propsMenu={menuProps}
                    nameMenu={"Подписка"}/>
                 <Search className="search-book-style" placeholder="Мне бы книгу..." />
            </Flex>
           
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