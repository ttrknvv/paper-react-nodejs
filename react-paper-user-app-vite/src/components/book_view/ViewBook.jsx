import { useParams } from "react-router-dom";
import FormReviewBook from "./FormReviewBook/FormReviewBook";
import { Button, Flex } from "antd";
import DataBookView from "./DataBookView/DataBookView";
import ReviewItem from "./DataBookView/Review/ReviewItem";
import "./index.css"
import { useState } from "react";

export default function ViewBook() {
    const {id} = useParams();

    const [currentCount, setCurrentCount] = useState(3);
    const itemsPerClick = 3;

    const test = [1, 2, 3, 4, 5, 6, 7, 8]

    const onView = () => {
        console.log("click")
        currentCount >= test.length ? setCurrentCount(3): setCurrentCount(currentCount + itemsPerClick);
    }

    const displayedItems = test.slice(0, currentCount);

    console.log(currentCount)

    return (
        <Flex 
            align="center"
            vertical>
            <DataBookView />
            <FormReviewBook />
            <Flex className="reviews-book-list" 
                  gap={"3vw"}
                  vertical>
                {displayedItems.map(() => (<ReviewItem />))}
                <Flex align={"center"} justify={"center"} style={{width: "100%"}}>
                    <Button type="primary"
                        className="button-view-reviews"
                        onClick={onView}>{currentCount < test.length ? 'Показать еще' : 'Свернуть'}</Button>
                </Flex>
                
            </Flex>
        </Flex>
    )
}