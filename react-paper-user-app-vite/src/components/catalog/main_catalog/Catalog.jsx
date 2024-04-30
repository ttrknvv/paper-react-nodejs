import CardBook from "../card_book/CardBook";
import "../../../styles/stylesForComponents/catalog/mainCatalog/catalog.css"
import DropDownMenuSort from "../drop_down_menu/DropDownMenuSort";
import { Button, Cascader, Dropdown, Flex, Input, Menu, Space } from "antd";
import { SearchOutlined } from '@ant-design/icons';
import { useState } from "react";


export default function Catalog() {

    const sortItems = [
        {
          label: 'По популярности',
          key: '1',
        },
        {
          label: 'По новизне',
          key: '2',
        },
        {
          label: 'По оценке',
          key: '3',
        },
        {
          label: 'Без сортировки',
          key: '4',
        },
      ];

      const sortItemsSubscription = [
        {
          label: 'Стандарт',
          key: '1',
        },
        {
          label: 'Премиум',
          key: '2',
        },
        {
          label: 'Бесплатные',
          key: '3',
        },
        {
          label: 'Все книги',
          key: '4',
        },
      ];

      const menuPropsSort = {
        items: sortItems,
        onClick: (e) => {
          console.log("click ", e.key)
        },
        selectable: true,
        defaultSelectedKeys: ['4']
      };

      const menuPropsSortSubscription = {
        items: sortItemsSubscription,
        onClick: (e) => console.log("click ", e.key),
        selectable: true,
        defaultSelectedKeys: ['4']
      };

      const onEnter = (event) => console.log(event.target.value);

    return (
        <main>
            <Flex wrap gap={"8%"} align="center" style={{margin: "2% 3% 0 4%"}}>
                <DropDownMenuSort propsMenu={menuPropsSort}
                    nameMenu={"Выбор сортировки"} />
                <DropDownMenuSort propsMenu={menuPropsSortSubscription}
                    nameMenu={"По подписке"} />
                 <Input suffix={<SearchOutlined />}
                       placeholder="Ищем книгу..."
                       className="search-book-style"
                       onPressEnter={onEnter} />
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