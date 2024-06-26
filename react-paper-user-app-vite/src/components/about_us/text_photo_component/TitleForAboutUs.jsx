import "../../../styles/stylesForComponents/about_us/mainAboutUs/mainAboutUs.css"
import {Col, Row} from 'antd'

export default function TitleForAboutUs()
{
    return (
        <Row className="about-us-component">
            <Col span={9} >
                <img src="/ProjectImages/aboutUsPhoto.png" className="logo-component-style" />
            </Col>
            <Col span={12} className="container-text-style">
                <Row>
                    <h1 className="h1-style">{"Бумажный город"}</h1>
                </Row>
                <Row>
                    <p className="text-style">{"\"Бумажный город\" - это электронная библиотека, которая была создана в 2012 году с целью предоставить читателям возможность наслаждаться чтением книг \
    в цифровом формате, сохраняя при этом уникальный опыт чтения бумажных книг.\
    В основе концепции \"Бумажного города\" лежит стремление передать атмосферу \
    и чувство, которые возникают при чтении настоящей бумажной книги. Команда разработчиков и дизайнеров уделяла особое внимание деталям, чтобы пользователи могли чувствовать себя так, будто они держат настоящую книгу \
    в своих руках.\
    \nБиблиотека предлагает широкий выбор книг различных жанров и направлений, \
    от классической литературы до современных бестселлеров. Каждая книга \
    в \"Бумажном городе\" проходит тщательный отбор, чтобы обеспечить высокое качество перевода, оформления и макета, делая чтение максимально приятным \
    и комфортным для пользователей."}</p>
                </Row>
            </Col>
        </Row>
    )
}