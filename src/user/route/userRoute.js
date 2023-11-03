/**
 * userRoute được sử dụng để tạo Route trong App.js
 * 
 * 
 * 
 * Khi sử dụng với useNavigate()
 * Thay vì: navigate("/login")
 * Sẽ là: navigate(userRoute.login.path)
 */

import Home from "../page/Home/Home";
import Room from "../page/Room/Room";
import Location from "../page/Location/Location";
import Login from "../page/Login/Login";
import Register from "../page/Register/Register";
import Account from "../page/Account/Account";
import PageNotFound from "../page/404/PageNotFound";
import DefaultLayout from "../layout/DefaultLayout";
import AccountLayout from "../layout/AccountLayout";
import RoomDetail from "../page/Detail";

export const userRoute = {
    home: {
        path: "/",
        element: <DefaultLayout><Home /></DefaultLayout>
    },

    room: {
        path: "/room",
        element: <DefaultLayout><Room /></DefaultLayout>
    },

    detail: {
        path: "/room/:id",
        element: <DefaultLayout><RoomDetail /></DefaultLayout>,
        id: (id) => `/room/${id}`
    },

    location: {
        path: "/location/:city",
        element: <DefaultLayout><Location /></DefaultLayout>
    },

    login: {
        path: "/login",
        element: <DefaultLayout><Login /></DefaultLayout>
    },

    register: {
        path: "/register",
        element: <DefaultLayout><Register /></DefaultLayout>
    },

    account: {
        path: "/account",
        element: <AccountLayout><Account /></AccountLayout>
    },

    other: {
        path: "*",
        element: <DefaultLayout><PageNotFound /></DefaultLayout>
    },

}
