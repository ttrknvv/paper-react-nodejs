import { Outlet } from "react-router-dom";
import Authorization from "../../authorization/authorization_main/authorization"

export default function ProtectedRoute() {
    const isAuth  = false;
    const noProtected = false;
    return (
      <>
        {isAuth || noProtected ? <Outlet /> : <Authorization />}
      </>
    )
  }