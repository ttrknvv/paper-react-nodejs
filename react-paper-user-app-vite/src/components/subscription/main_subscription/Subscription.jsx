import CardSubscription from "../card_subcription/CardSubscription";
import "../../../styles/stylesForComponents/subscription/mainSubscription/subscription.css"
import { subscriptions } from "../../../data/dataForSubscription/dataForSubscription";

export default function Subscription()
{
    return(
        <main id="subscription-component">
            {subscriptions.map((element, index, array) => <CardSubscription image = {element.icon} 
                                                                               title = {element.title} 
                                                                               cost = {element.cost}
                                                                               description = {element.description}
                                                                               key = {index} />)}

        </main>
    )
}