import { useParams } from "react-router-dom";
import FormReviewBook from "./FormReviewBook/FormReviewBook";
import { Flex } from "antd";
import DataBookView from "./DataBookView/DataBookView";

export default function ViewBook() {
    const {id} = useParams();

    return (
        <Flex 
            align="center"
            vertical>
            <DataBookView />
            <FormReviewBook />
        </Flex>
    )
}