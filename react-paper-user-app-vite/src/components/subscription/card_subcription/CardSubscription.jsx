import { Button, Row } from "antd"
import "../../../styles/stylesForComponents/subscription/mainSubscription/subscription.css"

export default function CardSubscription({image, title, cost, description})
{
    const handleClick = () => console.log("Нажата карточка: " + title)

    return(
        <div className="card-subscription">
                <img src={image} alt="photo" />
                <h3>{title}</h3>
                <p id="cost-sub">{cost} бел.руб / месяц</p>
                <p id="title-sub">{description}</p>
                <Row className="container-button">
                    <Button type="primary" htmlType="button" className="submit-button" onClick={handleClick}>Купить</Button>
                </Row>
        </div>
    )
}