import { Flex } from "antd";
import FormCreateBook from "./Form/FormCreateBook";
import "./index.css"

export default function CreateBook() {
    return(
        <main>
            <Flex vertical align={'center'} justify={'center'} style={{marginTop: "2%"}}>
                 <h1 className="header-create-book">Добавление книги</h1>
                 <FormCreateBook />
            </Flex>
        </main>
    )
}