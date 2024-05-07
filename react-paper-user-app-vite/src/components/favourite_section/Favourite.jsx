import { Flex } from "antd";
import CardBook from "./card_book/CardBook";
import "./index.css"


export default function Favourite() {

    return (
        <Flex className="main-favourite-style"
              align={"center"}
              justify={"center"}>
            <CardBook />
        </Flex>
    )
}