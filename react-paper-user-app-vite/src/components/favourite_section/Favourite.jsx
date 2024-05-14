import { Flex, Pagination } from "antd";
import CardBook from "./card_book/CardBook";
import "./index.css"
import { useState } from "react";
import BooksClientService from "../../services/BooksClientService";


export default function Favourite() {

    const name = ["name1","name2","name3","na4me","nam5e","na6me","na7me","nam8e",
    "na9me","na99me","nam11e","na12me","nam13e","na14me","n15ame","nam16e","n17ame","name","name","name","name","name", "tata", "tata1", "tat2", "tat3", "tata4", "tat5",
    "na9me","na99me","nam11e","na12me","nam13e","na14me","n15ame","nam16e","n17ame","name","name","name","name","name", "tata", "tata1", "tat2", "tat3", "tata4", "tat5",
    "na9me","na99me","nam11e","na12me","nam13e","na14me","n15ame","nam16e","n17ame","name","name","name","name","name", "tata", "tata1", "tat2", "tat3", "tata4", "tat5",
  "na9me","na99me","nam11e","na12me","nam13e","na14me","n15ame","nam16e","n17ame","name","name","name","name","name", "tata", "tata1", "tat2", "tat3", "tata4", "tat5",
  "na9me","na99me","nam11e","na12me","nam13e","na14me","n15ame","nam16e","n17ame","name","name","name","name","name", "tata", "tata1", "tat2", "tat3", "tata4", "tat5",
  "na9me","na99me","nam11e","na12me","nam13e","na14me","n15ame","nam16e","n17ame","name","name","name","name","name", "tata", "tata1", "tat2", "tat3", "tata4", "tat5"];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const handlePageChange = (page) => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Добавляем плавную прокрутку
      });
    setCurrentPage(page);
    console.log(page)
    
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedItems = name.slice(startIndex, endIndex);

    return (
        <Flex className="main-favourite-style"
              align={"center"}
              justify={"center"}
              gap={"0.4vw"}
              vertical>
            {displayedItems.map((item) => <CardBook name={item} key={item}/>)}
            <Pagination 
              showSizeChanger={false}
              current={currentPage}
              pageSize={itemsPerPage}
              total={name.length}
              onChange={handlePageChange}
              className={"pagination-style"}
            />
        </Flex>
    )
}