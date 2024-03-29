import { Outlet } from "react-router";
import MainNavigation from "../components/MainNavigation";

export default function AdminRootLayout(){
    return <>
        <MainNavigation role/>
        <main>
            <Outlet />
        </main>
    </>
}