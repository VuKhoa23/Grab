import { Outlet } from "react-router-dom";
import Header from "../Header/Header";



export default function Homelayout() {
    return (
        <div>
            <Header />
            <Outlet />
            {/* add footer */}
        </div>
    )
}
