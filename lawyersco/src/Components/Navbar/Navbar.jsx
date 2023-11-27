import React from 'react'
import styles from "./Navbar.module.css"
import Logo from "../../Assets/logo.svg"
export default function Navbar() {
    return (
        <div>
            <div className={styles.navbar}>
                <div className={styles.logo}>
                    <img src={Logo} alt="Logo" />
                </div>
                <div className={styles.navLinks}>
                    <a href="#home">Home</a>
                    <a href="#attorneys">Attorneys</a>
                    <a href="#practice-areas">Practice Areas</a>
                    <a href="#about-us">About Us</a>
                </div>
                <button className={styles.contactBtn}>Contact Us</button>
            </div>
        </div>

    )
}
