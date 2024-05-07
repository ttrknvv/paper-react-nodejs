import CardBook from "../card_book/CardBook";
import "../../../styles/stylesForComponents/catalog/mainCatalog/catalog.css"
import DropDownMenuSort from "../drop_down_menu/DropDownMenuSort";
import { Flex, Input, Pagination } from "antd";
import { SearchOutlined } from '@ant-design/icons';
import { sortItems, sortItemsSubscription } from "../../../data/dataForCatalog/dataForCatalog";
import { useState } from "react";


export default function Catalog() {

  const name = ["name1","name2","name3","na4me","nam5e","na6me","na7me","nam8e",
  "na9me","na99me","nam11e","na12me","nam13e","na14me","n15ame","nam16e","n17ame","name","name","name","name","name", "tata", "tata1", "tat2", "tat3", "tata4", "tat5",
  "na9me","na99me","nam11e","na12me","nam13e","na14me","n15ame","nam16e","n17ame","name","name","name","name","name", "tata", "tata1", "tat2", "tat3", "tata4", "tat5",
  "na9me","na99me","nam11e","na12me","nam13e","na14me","n15ame","nam16e","n17ame","name","name","name","name","name", "tata", "tata1", "tat2", "tat3", "tata4", "tat5",
"na9me","na99me","nam11e","na12me","nam13e","na14me","n15ame","nam16e","n17ame","name","name","name","name","name", "tata", "tata1", "tat2", "tat3", "tata4", "tat5",
"na9me","na99me","nam11e","na12me","nam13e","na14me","n15ame","nam16e","n17ame","name","name","name","name","name", "tata", "tata1", "tat2", "tat3", "tata4", "tat5",
"na9me","na99me","nam11e","na12me","nam13e","na14me","n15ame","nam16e","n17ame","name","name","name","name","name", "tata", "tata1", "tat2", "tat3", "tata4", "tat5"];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;

  const handlePageChange = (page) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'// Добавляем плавную прокрутку
    });
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedItems = name.slice(startIndex, endIndex);

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
          <Flex vertical align="center" style={{marginTop: "2%"}}>
            <Flex wrap="wrap" justify="space-between" style={{width: "92%", paddingRight: "1.2%"}}>
                  <DropDownMenuSort propsMenu={menuPropsSort}
                      nameMenu={"Выбор сортировки"} />
                  <DropDownMenuSort propsMenu={menuPropsSortSubscription}
                      nameMenu={"По подписке"} />
                  <Input suffix={<SearchOutlined />}
                        placeholder="Ищем книгу..."
                        className="search-book-style"
                        onPressEnter={onEnter}
                        maxLength={50} />
              </Flex>
            
              <Flex wrap="wrap" gap={"2.6%"} className="main-catalog-component">
                  {displayedItems.map((item) => <CardBook nameBook={item} key={item}/>)}
            </Flex>
            <Pagination 
              showSizeChanger={false}
              current={currentPage}
              pageSize={itemsPerPage}
              total={name.length}
              onChange={handlePageChange}
              className={"pagination-style"}
            />
          </Flex>
            
        </main>
        
    )
}