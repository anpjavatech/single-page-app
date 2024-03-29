import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

export default function MainNavigation({role}){
    return <header className={classes.header}>
        <nav>
            {role && <ul className={classes.list}>
                <li> 
                    <NavLink 
                        to="/admin" 
                        className={({isActive})=> isActive? classes.active : undefined}
                        end>
                        Admin Home
                    </NavLink>
                </li>
                <li> 
                    <NavLink    
                        to="/admin/products"
                        className={({isActive})=> isActive? classes.active : undefined}>
                        Products for Admin Role.
                    </NavLink>
                </li>
            </ul>}
            {!role && 
            <ul className={classes.list}>
                <li> 
                    <NavLink 
                        to="/"
                        className={({isActive})=> isActive? classes.active : undefined}
                        end>
                        Home
                    </NavLink>
                </li>
                <li> 
                    <NavLink 
                        to="/products"
                        className={({isActive})=> isActive? classes.active : undefined}>
                        Products.
                    </NavLink>
                </li>
            </ul>}
        </nav>
    </header>
}