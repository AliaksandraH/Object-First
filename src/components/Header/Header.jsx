import { NavLink } from "react-router-dom";
import Logo from "/images/logo.svg";
import Vector from "/images/vector.svg";
import Notifications from "/images/notifications.svg";
import Avatar from "/images/avatar.svg";
import styles from "./Header.module.css";

const {
    header,
    logo,
    navLinks,
    activeLink,
    navBarBtns,
    notificationsBtn,
    avatarBtn,
    link,
} = styles;

const Header = () => {
    return (
        <header className={header}>
            <img src={Logo} alt="logo" className={logo} />
            <nav className={navLinks}>
                <NavLink
                    to="/"
                    className={({ isActive }) => (isActive ? activeLink : "")}
                >
                    Dashboard
                </NavLink>
                <NavLink
                    to="/events"
                    className={({ isActive }) => (isActive ? activeLink : "")}
                >
                    Events
                </NavLink>
                <NavLink
                    to="/help"
                    className={({ isActive }) =>
                        isActive ? `${link} ${activeLink}` : link
                    }
                >
                    <span>Help</span>
                    <img src={Vector} alt="vector" />
                </NavLink>
            </nav>
            <section className={navBarBtns}>
                <img
                    src={Notifications}
                    alt="notifications"
                    className={notificationsBtn}
                />
                <img src={Avatar} alt="avatar" className={avatarBtn} />
            </section>
        </header>
    );
};

export default Header;
