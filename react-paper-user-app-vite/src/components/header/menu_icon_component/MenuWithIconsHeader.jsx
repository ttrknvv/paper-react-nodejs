import IconMenu from "./IconMenu";
import favourite from '/ProjectImages/favourite.png'
import profile from '/ProjectImages/profile.png'
import "../../../styles/stylesForComponents/header/mainHeader/header.css"
import { Row } from "antd";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";


export default function MenuWithIconHeader()
{
    const {isUserLogged} = useContext(AuthContext);

    return (
        <Row className="icons-menu" justify={"center"}>
                    <IconMenu icon={favourite} 
                        linkValue={isUserLogged ? "/favourite" : "/authorization"}/>
                    <IconMenu icon={profile} 
                        linkValue={isUserLogged ? "/profile" : "/authorization"}/>
        </Row>
    )
}