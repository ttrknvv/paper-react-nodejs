import { Layout } from "antd"
import { Outlet, ScrollRestoration } from "react-router-dom"
import Footer from "../footer/main_footer/Footer"
import AppHeader from "../header/main_header/AppHeader"
import "../../styles/stylesForComponents/mainStyle/index.css"
import { Suspense } from "react"
import { useEffect } from "react"


export default function CommonLayout({children})  {

    console.log(children)

    return (
        <Layout className="main-style">
            <AppHeader />
            <Suspense fallback={<div>загрузка...</div>}>
                {children ? children : <Outlet />}
            </Suspense>
            <ScrollRestoration />
            <Footer />
        </Layout>
    )
}