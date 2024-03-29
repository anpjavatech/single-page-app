import { Outlet } from "react-router";
import MainNavigation from "../components/MainNavigation";
import classes from "./RootLayout.module.css";

export default function AdminRootLayout(){
    return <>
        <MainNavigation role/>
        <main className={classes.content}>
            <Outlet />
        </main>
    </>
}