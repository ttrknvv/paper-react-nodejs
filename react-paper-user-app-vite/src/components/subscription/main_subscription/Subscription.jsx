import CardSubscription from "../card_subcription/CardSubscription";
import "../../../styles/stylesForComponents/subscription/mainSubscription/subscription.css"
import { subscriptions } from "../../../data/dataForSubscription/dataForSubscription";

export default function Subscription()
{
    return(
        <main className="subscription-list-style">
            {subscriptions.map((element) => <CardSubscription image = {element.icon} 
                                                                               title = {element.title} 
                                                                               cost = {element.cost}
                                                                               description = {element.description}
                                                                               key = {element.id} />)}

        </main>
    )
}