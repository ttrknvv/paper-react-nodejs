import { Button, Flex } from "antd";
import "../../../styles/stylesForComponents/subscription/mainSubscription/subscription.css"


export default function SalesSection({cost, type, title}) {

    const onClick = () => console.log("click ", type, ' ', cost)

    return (
        <Button 
            type="text" 
            style={{width: "32%", height: "max-content", padding: "2%"}}
            onClick={onClick}>
                <Flex className="sales-style"
                      align="center"
                      justify="center"
                      gap={"0.4vw"}
                      vertical>
                            <p>{title}</p>
                            <p>{cost} бел. руб.</p>
                </Flex>
         </Button>
    )
    
}