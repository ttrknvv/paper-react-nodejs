import { Button, Flex, Modal, Row } from "antd"
import "../../../styles/stylesForComponents/subscription/mainSubscription/subscription.css"
import { useState } from "react";
import SalesSection from "../sales_section/SalesSection";

export default function CardSubscription({image, title, cost, description})
{
    const handleClick = () => {
        console.log("Нажата карточка: " + title)
        setModal1Open(true)
    }

    const [modal1Open, setModal1Open] = useState(false);

    return(
        <div className="card-subscription">
                <img src={image} alt="photo" />
                <h3>{title}</h3>
                <p id="cost-sub">{cost} бел.руб / месяц</p>
                <p id="title-sub">{description}</p>
                <Row className="container-button">
                    <Button type="primary" htmlType="button" className="submit-button" onClick={handleClick}>Купить</Button>
                </Row>
                <Modal
                    width={1000}
                    open={modal1Open}
                    onOk={() => setModal1Open(false)}
                    onCancel={() => setModal1Open(false)}
                    centered
                    footer={[                             
                            ]}
                >
                    <Flex vertical>
                        <Flex justify="center">
                            <p className="title-sales-style">{`Оформление ${title}`}</p>
                        </Flex>
                        <Flex justify="space-between"
                            style={{margin: "7% 6%"}}>
                            <SalesSection cost={cost} title={"1 месяц"} type={title}/>
                            <SalesSection cost={cost * 2 - 5} title={"2 месяца"} type={title}/>
                            <SalesSection cost={cost * 3 - 5} title={"3 месяца"} type={title}/>
                        </Flex>
                    </Flex>
                    
                </Modal>
        </div>
    )
}