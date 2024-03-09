import styles from "./Sidebar.module.css"
import Logo from "../logo/Logo"
import AppNav from "../Appnav/AppNav"
import { Outlet } from "react-router-dom"
function Sidebar() {
    return (
        <div className={styles.Sidebar}>
            <Logo/>
            <AppNav/>
            <Outlet/>
            <footer className={styles.footer}>
                <p className={styles.copright}>
                    &copy; Bavith
                </p>
            </footer>
        </div>
    )
}

export default Sidebar
