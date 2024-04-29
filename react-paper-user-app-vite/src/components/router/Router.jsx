import { lazy } from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import CommonLayout from "../layout/CommonLayout"

const AboutUs = lazy(() => import("../about_us/main_about_us/AboutUs")) 
const Catalog = lazy(() =>  import("../catalog/main_catalog/Catalog"))
const Authorization = lazy(() =>  import("../authorization/authorization_main/authorization"))
const Subscription = lazy(() =>  import("../subscription/main_subscription/Subscription"))
const NotFound = lazy(() =>  import("../notFound/NotFound"))



export const Router = () =>
{
    return (
        <RouterProvider
            router={createBrowserRouter(
                [
                    {
                        element: <CommonLayout />,
                        path: '/',
                        errorElement: (
                                <CommonLayout>
                                    <NotFound />
                                </CommonLayout>
                        ),
                        children: [
                            { element: <AboutUs />, index: true },
                            {
                              path: "/catalog",
                              element: <Catalog />,
                            },
                            {
                                path: "/authorization",
                                element: <Authorization />, 
                            },
                            {
                                path: "/subscription",
                                element: <Subscription />, 
                            },
                            {
                                path: "/about",
                                element: <AboutUs />, 
                            },
                        ]
                    }
                ]
            )} />
    )
}