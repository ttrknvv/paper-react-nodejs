import { Flex } from "antd";
import "./index.css"
import { useState } from "react";

export default function ElemForCarousel({books, queue}) {


    return (
        <Flex style={{width: "100%"}} 
              align="center" 
              justify="center">

            <div className="fourth-book-style">
                <img src={books[queue[3]].image} />
            </div>

            <div className="third-book-style">
                <img src={books[queue[2]].image} />
            </div>

            <div className="second-book-style">
                <img src={books[queue[1]].image} />
            </div>

            <div className="first-book-style">
                <img src={books[queue[0]].image} />
            </div>

            <div className="description-style-book">
                <p className="description-style-book-p">{books[queue[0]].description} </p>
            </div>
        </Flex>
    )
}