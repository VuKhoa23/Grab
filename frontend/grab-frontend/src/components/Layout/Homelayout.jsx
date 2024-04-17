import { Outlet } from "react-router-dom";
import Header from "../Header/Header";



export default function Homelayout() {
    return (
        <div
            style={{
                padding: 0,
                margin: 0,
                boxSizing: "border-box",
            }}>
            <Header />
            <Outlet />
            {/* add footer */}
        </div>
    )
}
