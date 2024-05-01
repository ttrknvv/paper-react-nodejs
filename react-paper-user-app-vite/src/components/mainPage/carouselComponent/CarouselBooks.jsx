import { Carousel, Flex, Row } from "antd";
import "./index.css"
import ElemForCarousel from "./ElemForCarousel";

export default function CarouselBooks() {
    const data = [
      {image: "/ProjectImages/Books/book1.jpg", description: "Стивен Кинг приглашает читателей в жуткий мир тюремного блока смертников, откуда уходят, чтобы не вернуться, приоткрывает дверь последнего пристанища тех, кто преступил не только человеческий, но и Божий закон. По эту сторону электрического стула нет более смертоносного местечка! Ничто из того, что вы читали раньше, не сравнится с самым дерзким из ужасных опытов Стивена Кинга - с историей, что начинается на Дороге Смерти и уходит в глубины самых чудовищных тайн человеческой души"},
      {image: "/ProjectImages/Books/book2.jpg", description: "«Унесенные ветром» — история о молодой южанке, дочери состоятельного владельца плантаций в Джорджии, чья беззаботная юность прекращается с началом Гражданской войны. В один миг девушке пришлось повзрослеть: мать умерла, отец болен, а родное поместье разграбили янки. Эта книга стала самой любимой для нескольких поколений женщин, и ничего равного ей не создано по сей день. Проходят годы и годы, а «Унесенные ветром» не стареют, и теперь уже новым читательницам предстоит смеяться и плакать, любить и страдать, бороться и надеяться вместе с великолепной Скарлетт О’Хара... Роман получил в 1936 году в США Национальную книжную премию, а в 1937 году — престижную Пулитцеровскую премию. В 1939 году роман был экранизирован и удостоился восьми премий \"Оскар\"."},
      {image: "/ProjectImages/Books/book3.jpg", description: "Близится Праздник середины осени, а вместе с ним — роскошный пир и Состязание фонарей в небесных чертогах. Отправляясь на торжество, Се Лянь не подозревает, что окажется в центре внимания. По возвращении в мир смертных он принимается за работу, ведь теперь нужно прокормить сразу три лишних рта! К несчастью, на задании, которое получил принц, он вновь сталкивается с озлобленным духом младенца, однако Хуа Чэн успевает прийти на выручку."},
      {image: "/ProjectImages/Books/book4.jpg", description: "Гарри взрослеет, и вместе с тем жить в Хогвартсе всё страшнее. Из тюрьмы для волшебников Азкабан сбежал опасный преступник - Сириус Блэк. Мир наполнился слухами, что он ищет и хочет убить одного тринадцатилетнего парня, совсем обычного на первый взгляд. Его имя - Гарри Поттер. Специальное издание для учеников и выпускников «Гриффиндора» к 20-летию первой публикации книги «Гарри Поттер и узник Азкабана»."},]

    return (
      <Carousel effect="fade" 
                dots={true} 
                className="carousel-book-style-container"
                dotPosition="bottom"
                autoplay={true}
                autoplaySpeed={2500}
                speed={1500}>
        <ElemForCarousel books={data}
                         queue={[3, 2, 1, 0]} />
        <ElemForCarousel books={data}
                         queue={[2, 1, 0, 3]} />
        <ElemForCarousel books={data}
                         queue={[1, 0, 3, 2]} />
        <ElemForCarousel books={data}
                         queue={[0, 3, 2, 1]} />
    </Carousel>
    )
}