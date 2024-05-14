import { lazy } from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import CommonLayout from "../layout/CommonLayout"
import ProtectedRoute from "./protectedRoutes/ProtectedRoute"

const AboutUs = lazy(() => import("../about_us/main_about_us/AboutUs")) 
const Catalog = lazy(() =>  import("../catalog/main_catalog/Catalog"))
const Authorization = lazy(() =>  import("../authorization/authorization_main/authorization"))
const Subscription = lazy(() =>  import("../subscription/main_subscription/Subscription"))
const NotFound = lazy(() =>  import("../notFound/NotFound"))
const MainPage = lazy(() =>  import("../mainPage/MainPage"))
const Favourite = lazy(() =>  import("../favourite_section/Favourite"))
const ViewBook = lazy(() =>  import("../book_view/ViewBook"))
const Profile = lazy(() =>  import("../profile/Profile"))
const EditProfile = lazy(() =>  import("../profile/edit/EditProfile"))
const CreateBook = lazy(() =>  import("../book_view/Create/CreateBook"))







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
                            { element: <MainPage />, index: true },
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
                            {
                                path: "/profile",
                                element: <ProtectedRoute />, 
                                children: [
                                    {element: <Profile />, index: true}
                                ]
                            },
                            {
                                path: "/authorization",
                                element: <Authorization />, 
                            },
                            {
                                path: "/favourite",
                                element: <ProtectedRoute />,
                                children: [
                                    {element: <Favourite />, index: true}
                                ]
                            },
                            {
                                path: "/book/:id",
                                element: <ViewBook />
                            },
                            {
                                path: "profile/edit",
                                element: <ProtectedRoute />,
                                children: [
                                    {element: <EditProfile />, index: true}
                                ]
                            },
                            {
                                path: "/book/create",
                                element: <ProtectedRoute />,
                                children: [
                                    {element: <CreateBook />, index: true}
                                ]
                            }
                        ]
                    }
                ]
            )} />
    )
}