import { Button, Flex, Row } from "antd"
import "./index.css"

export default function CardBook({nameBook}) {

    const onClickBook = (event) => {console.log(event.target, nameBook)}

    return (
        <Button type="text" 
                className="container-card-button"
                onClick={onClickBook}>
            <Flex className=".container-card" 
                  justify={"center"} 
                  align="center" 
                  vertical>
                <Row className="image-style-book">
                    <img style={{width: "100%"}} 
                     src="/ProjectImages/Books/test2.jpg" />
                </Row>
                <Flex justify={"space-between"} 
                      align="flex-start" 
                      style={{width: "92%", marginTop:"3%"}}>
                    <Row>
                        <p className="name-book-style">{"ыыыыыыыыыыыыыыыыыыыы ыыыыыыыыыыыыыыыыыыыы"}</p>
                    </Row>
                    <img style={{width: "9%"}} 
                        src="/ProjectImages/heart.png" 
                        alt="facourite" />
                </Flex>
                <Flex className="author-subscribe-section" 
                      justify={"space-between"} 
                      align="flex-start" 
                      style={{marginTop: "2%", width: "92%"}}>
                    <p className="author-text-style" 
                       style={{width: "92%"}}>{nameBook}</p>
                    <p className="subscribe-type-text-style">Стандарт</p>
                </Flex>
        </Flex>
        </Button>
        
    )
}