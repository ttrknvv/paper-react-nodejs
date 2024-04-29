import "../../../styles/stylesForComponents/catalog/cardBook/cardBook.css"

export default function CardBook() {
    return (
        <div id="card-book">
            <div id="image-section">
                <img id="image-book" src="/ProjectImages/Books/test2.jpg" />
            </div>
            <div id="name-favourite-section">
                <p id="name-book-text">Хрупкое равновесие хрупкое</p>
                <img id="favourite-type" src="/ProjectImages/heart.png" alt="heart" />
            </div>
            <div id="author-subscribe-section">
                <p id="author-text">Уолтер Тевис</p>
                <p id="subscribe-type-text">Стандарт</p>
            </div>
        </div>
    )
}