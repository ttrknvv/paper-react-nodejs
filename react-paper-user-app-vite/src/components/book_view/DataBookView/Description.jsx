import { Button } from "antd"
import { useState } from "react"
import {
    ArrowRightOutlined,
    ArrowLeftOutlined
  } from '@ant-design/icons';

export default function Description({text}) {

    const [showFullText, setShowFullText] = useState(false)

    const toggleText = () => setShowFullText(!showFullText)

    return (
        <>
                {text.length > 900 && !showFullText ? 
                    (<><div style={{height: "54%"}} className="description">{text.slice(0, 950)}... <Button className="show-full-style" type="link" onClick={toggleText}><ArrowRightOutlined /></Button> </div></>) : 
                text.length <= 900 ? (<div style={{height: "54%"}} className="description">{text}</div>) : 
                (<><div style={{height: "max-content"}} className="description">{text} <Button className="show-full-style" type="link" onClick={toggleText}><ArrowLeftOutlined /></Button></div></>)}
        </>
    )
}