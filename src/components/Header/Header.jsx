import { NavLink } from "react-router-dom";
import Logo from "/images/logo.svg";
import Vector from "/images/vector.svg";
import Notifications from "/images/notifications.svg";
import Avatar from "/images/avatar.svg";
import styles from "./Header.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
            <img src={Logo} alt="logo" className="w-20 h-6" />
            <nav className="flex justify-center items-center gap-2">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? styles.activeLink : ""
                    }
                >
                    Dashboard
                </NavLink>
                <NavLink
                    to="/events"
                    className={({ isActive }) =>
                        isActive ? styles.activeLink : ""
                    }
                >
                    Events
                </NavLink>
                <NavLink
                    to="/help"
                    className={({ isActive }) =>
                        isActive
                            ? `${styles.link} ${styles.activeLink}`
                            : styles.link
                    }
                >
                    <span>Help</span>
                    <img src={Vector} alt="vector" />
                </NavLink>
            </nav>
            <section className="flex items-center justify-center gap-6">
                <img
                    src={Notifications}
                    alt="notifications"
                    className="w-6 h-6"
                />
                <img src={Avatar} alt="avatar" className="w-8 h-8" />
            </section>
        </header>
    );
};

export default Header;
