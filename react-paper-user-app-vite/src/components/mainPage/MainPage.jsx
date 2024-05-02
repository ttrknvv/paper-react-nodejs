import { Col, Flex, Input, Row } from "antd";
import CarouselBooks from "./carouselComponent/CarouselBooks";
import { SearchOutlined } from '@ant-design/icons';
import "../../styles/stylesForComponents/mainPage/mainPage.css"
import CardBook from "../catalog/card_book/CardBook";


export default function MainPage() {

    const onEnter = (event) => console.log(event.target.value);

    const name = ["name1","name2","name3","na4me"];

    return (
        <main>
            <Flex align="center" justify="center" style={{width: "100%"}} vertical>
                <CarouselBooks />
                <Input suffix={<SearchOutlined />}
                        placeholder="Книга или автор"
                        className="search-book-style-main"
                        onPressEnter={onEnter}
                        maxLength={50} />

                <Flex style={{marginTop: "4%", width: "100%"}} align="center" justify="center" vertical>
                    <p className="good-style-text">Наши преимущества</p>
                    <Flex className="container-good-icons" 
                           wrap="wrap"
                           style={{width: "96%"}}
                           justify="space-around">
                        <img src="/ProjectImages/good1.png"/>
                        <img src="/ProjectImages/good2.png"/>
                        <img src="/ProjectImages/good3.png"/>
                        <img src="/ProjectImages/good4.png"/>
                    </Flex>
                </Flex>

                <p className="good-style-text" style={{margin: "7% 0 2% 0"}}>Наиболее популярные книги</p>

                <Flex wrap="wrap" gap={"2.6%"} className="main-catalog-component">
                  {name.map((item) => <CardBook nameBook={item} key={item}/>)}
                </Flex>

                <p className="good-style-text" style={{margin: "7% 0 2% 0"}}>О подписке</p>

                <Row style={{width:"100%", marginTop: "2%"}}>
                    <Col span={8} offset={1}>
                        <img src="/ProjectImages/mainSubInfo.png" style={{width: "100%"}}/>
                    </Col>

                    <Col span={14} offset={1}>
                        <Row>
                            <p className="sub-text-style-header">Все книги доступны одновременно</p>
                        </Row>
                        <Row>
                            <p className="sub-text-style">Пользуйтесь подпиской - безлимитным абонементом на весь каталог</p>
                        </Row>
                    </Col>

                </Row>

            </Flex>
        </main>
    )
}