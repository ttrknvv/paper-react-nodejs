import { Button, Flex, Rate } from "antd";
import { useState } from "react";
import {
    ArrowRightOutlined,
    ArrowLeftOutlined,
    BookOutlined
  } from '@ant-design/icons';
import "./index.css"

export default function ReviewItem() {

    let text = "vblotrnjqeblkgsfdf;las gkew;oflads kigrmdw;fl kvdsnlvldsx fngvlkds vnfpvolnsd test test test testtest testtest test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test vblotrnjqeblkgsfdf;las gkew;oflads kigrmdw;fl kvdsnlvldsx fngvlkds vnfpvolnsd test test test testtest testtest test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test vblotrnjqeblkgsfdf;las gkew;oflads kigrmdw;fl kvdsnlvldsx fngvlkds vnfpvolnsd test test test testtest testtest test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test vblotrnjqeblkgsfdf;las gkew;oflads kigrmdw;fl kvdsnlvldsx fngvlkds vnfpvolnsd test test test testtest testtest test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test vblotrnjqeblkgsfdf;las gkew;oflads kigrmdw;fl kvdsnlvldsx fngvlkds vnfpvolnsd test test test testtest testtest test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test vblotrnjqeblkgsfdf;las gkew;oflads kigrmdw;fl kvdsnlvldsx fngvlkds vnfpvolnsd test test test testtest testtest test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test vblotrnjqeblkgsfdf;las gkew;oflads kigrmdw;fl kvdsnlvldsx fngvlkds vnfpvolnsd test test test testtest testtest test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test vblotrnjqeblkgsfdf;las gkew;oflads kigrmdw;fl kvdsnlvldsx fngvlkds v "

    const [showFullText, setShowFullText] = useState(false)

    const toggleText = () => setShowFullText(!showFullText)

    return (
        <Flex vertical>
            <p className="login-review">sttpnk</p>
            <p className="date-review">12.02.2004</p>
            <Rate className="rate-review-style" disabled defaultValue={2} character={<BookOutlined />} allowHalf />    
            <p className="data-review">
            <>
                {text.length > 300 && !showFullText ? 
                    (<>{text.slice(0, 300)}... <Button className="show-full-style" type="link" onClick={toggleText}><ArrowRightOutlined /></Button></>) : 
                text.length <= 300 ? ({text}) : 
                (<>{text} <Button className="show-full-style" type="link" onClick={toggleText}><ArrowLeftOutlined /></Button></>)}
        </>
                </p>

        </Flex>
    )
}