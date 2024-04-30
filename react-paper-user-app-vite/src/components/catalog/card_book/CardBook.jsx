import { Button, Flex, Row } from "antd"
import "../../../styles/stylesForComponents/catalog/cardBook/cardBook.css"
import "./index.css"

export default function CardBook() {
    return (
        <Button type="text" className="container-card-button">
            <Flex className=".container-card" justify={"center"} align="center" vertical>
                <Row className="image-style-book">
                    <img style={{width: "100%"}} src="/ProjectImages/Books/test2.jpg" />
                </Row>
                <Flex justify={"space-between"}>
                    <p className="name-book-style">Хрупкое равновесие хрупкое</p>
                    <img style={{width: "10%"}} className="favourite-icon-style" src="/ProjectImages/heart.png" alt="heart" />
                </Flex>
                <div id="author-subscribe-section">
                    <p id="author-text">Уолтер Тевис</p>
                    <p id="subscribe-type-text">Стандарт</p>
                </div>
        </Flex>
        </Button>
        
    )
}