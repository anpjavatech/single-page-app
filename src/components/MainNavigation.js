import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

export default function MainNavigation({role}){
    return <header className={classes.header}>
        <nav>
            {role && <ul className={classes.list}>
                <li> <Link to="/admin">Admin Home</Link></li>
                <li> <Link to="/admin/products">Products for Admin Role.</Link></li>
            </ul>}
            {!role && <ul className={classes.list}>
                <li> <Link to="/admin">Home</Link></li>
                <li> <Link to="/admin/products">Products.</Link></li>
            </ul>}
        </nav>
    </header>
}