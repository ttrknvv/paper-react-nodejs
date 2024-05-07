import { Button, Flex } from "antd";
import "./index.css"
import Description from "./Description";

export default function DataBookView() {
    return (
        <Flex className="container-view-book">
            <div className="container-view-img-book">
                <img src="/ProjectImages/Books/test.jpg" />
            </div>
            <Flex className="container-description-view-book"
                  vertical>
                <p className="name">Ход королевы</p>
                <p className="author">Уолтер Тэвис</p>
                <Description text={"Описание описание Описание описание Описание описание Описание описание Описание описание Описание описание Описание описание Описание описание Описание описание \
               \ Описание описание Описание описание Описание описание Описание описание\
               \ писание описание \
              \  Описание описание Описание описание Описание описание Описание описание Описание описание Описание описание Описание описание Описание описание Описание описание \
              \  Описание описание Описание описание Описание описание Описание описание Описание описание Описание описание Описание описание Описание описание Описание описание Описание \
              описание Описание описание Описание описание \
Описание описание Описание описание Описание описание Описание описание Описание описание Описание описание Описание описание Описание описание Описание описание Описание описание Описание описание Описание описание \
Описание описание Описание описание Описание описание Описание описание Описание описание Описание описание Описание описание Описание описание Описание описание Описание описан \
ие Описание описание Описание описание \
Описание описание Описание описание Описание описание Описание описание Описание описание Описание описание Описание описание Описание описание Описание описание Описание описание"
} />
                <p className="type-sub-style">Доступно по крутой подписке</p>
                <Button type="primary" className="book-view-button">Оформить</Button>
            </Flex>
        </Flex>
    )
}