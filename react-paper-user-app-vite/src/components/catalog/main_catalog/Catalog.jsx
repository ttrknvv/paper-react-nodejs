import CardBook from "../card_book/CardBook";
import "../../../styles/stylesForComponents/catalog/mainCatalog/catalog.css"
import DropDownMenuSort from "../drop_down_menu/DropDownMenuSort";
import { Flex, Input, Pagination } from "antd";
import { SearchOutlined } from '@ant-design/icons';
import { sortItems, sortItemsSubscription } from "../../../data/dataForCatalog/dataForCatalog";
import { useState } from "react";
import { useEffect } from "react";
import BooksClientService from "../../../services/BooksClientService";


export default function Catalog() {

  const [books, setBooks] = useState([])

  useEffect(()=> {
    BooksClientService.getAllBook()
    .then((res) => {
      setBooks(Array.from(res.data.allBooks))
      console.log(books)
      console.log(res.data)
    })
    .catch((error) => console.log(error));
  }, [])

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
                  {books.map((book) => <CardBook nameBook={book.name_book} 
                                                  authorName={book.author_book}
                                                  typeSubscription={book.typeSubscriptionIdType}
                                                  isFavourite={true}
                                                  image={book.image}
                                                  key={book.id_book}/>)}
            </Flex>
            <Pagination 
              showSizeChanger={false}
              current={currentPage}
              pageSize={itemsPerPage}
              total={4}
              onChange={handlePageChange}
              className={"pagination-style"}
            />
          </Flex>
            
        </main>
        
    )
}