import Link from "next/link"
import styles from "./nav.module.css"

function Navbar() {
    return (
        <>
            <nav className={styles.nav}>
            <h1>Learning Hub</h1>
            <ul >
                <li>
                    <Link href={"/html"}>HTML</Link></li>
                <li>
                    <Link href={"/css"}>CSS</Link></li>
                <li>
                    <Link href={"/js"}>JAVASCRIPT </Link></li>
                <li>
                    <Link href={"/reactjs"}>REACTJS</Link>
                </li>
            </ul>
            </nav>
        </>
    )

}
export default Navbar