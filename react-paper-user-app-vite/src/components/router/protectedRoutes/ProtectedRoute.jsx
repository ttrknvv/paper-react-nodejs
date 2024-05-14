import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import NotFound from "../../notFound/NotFound"

export default function ProtectedRoute() {
    const {isUserLogged}  = useContext(AuthContext);

    return (
      <>
        {isUserLogged ? <Outlet /> : <NotFound />}
      </>
    )
  }