import styles from "./Layout.module.css";
import Link from "next/link";
import { useContext, useState } from "react";
import { UserContext } from "@/contexts/UserContext";
import Login from "./Login";
import { PageContext } from "@/contexts/PageContext";
import { ReloadContext } from "@/contexts/ReloadContext";
import ThemeSlider from "./ThemeSlider";

const Layout = () => {
    const {user} = useContext(UserContext);
    const {page, handleClickLink} = useContext(PageContext);
    const {setReload} = useContext(ReloadContext);
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div className={styles.modal}>
            <div className={styles.overlay} ></div>
            <nav className={styles.navbar}>
                <div className={styles["burger-menu"]}>
                    <button className={styles["burger-menu__toggle"]} onClick={toggleMenu}>
                    {isOpen ? 'X' : 
                        <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 18L20 18" stroke="#15616d" strokeWidth="2" strokeLinecap="round"/>
                            <path d="M4 12L20 12" stroke="#15616d" strokeWidth="2" strokeLinecap="round"/>
                            <path d="M4 6L20 6" stroke="#15616d" strokeWidth="2" strokeLinecap="round"/>
                        </svg>}
                    </button>
                    
                     {isOpen && (<div className={`${styles["burger-menu__links"]} ${isOpen ? styles.open : ""}`}>
                        <Link className={`${page === "home" ? styles["active-page"] : ""}`} href="/" onClick={()=>{handleClickLink("home"); setIsOpen(false)}}>Home
                        </Link>
                        {user && <Link className={`${page === "details" ? styles["active-page"] : ""}`} href="/details" passHref onClick={()=>{handleClickLink("details"); setReload(true); setIsOpen(false)}}>Details
                        </Link> }
                        <Link className={`${page === "contact" ? styles["active-page"] : ""}`} href="/contact" onClick={()=>{handleClickLink("contact"); setIsOpen(false)}}>Contact
                        </Link>
                    </div>)}
                    {isOpen && (
                    <div className={styles["burger-menu__overlay"]} onClick={toggleMenu} />
                    )}
                </div>
                {/* <ThemeSlider /> */}
                <Login/> 
            </nav>
            {/* <Login/> */}
        </div>)
}

export default Layout;