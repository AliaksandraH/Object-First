import { NavLink } from "react-router-dom";
import Logo from "/images/logo.svg";
import Vector from "/images/vector.svg";
import Notifications from "/images/notifications.svg";
import Avatar from "/images/avatar.svg";
import styles from "./Header.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
            <img src={Logo} alt="logo" className={styles.logo} />
            <nav className={styles.navLinks}>
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
            <section className={styles.navBarBtns}>
                <img
                    src={Notifications}
                    alt="notifications"
                    className={styles.notificationsBtn}
                />
                <img src={Avatar} alt="avatar" className={styles.avatarBtn} />
            </section>
        </header>
    );
};

export default Header;
