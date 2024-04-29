import "../../../styles/stylesForComponents/subscription/cardSubscription/cardSubscription.css"

export default function CardSubscription({image, title, cost, description})
{
    return(
        <div id="card-subscription">
            <img src={image} alt="photo" />
            <h3>{title}</h3>
            <p id="cost-sub">{cost} бел.руб / месяц</p>
            <p id="title-sub">{description}</p>
            <button id="buy-sub" >Купить</button>
        </div>
    )
}