import style from "../header/header.module.css";
import logo from "../../assets/img/Sevencode.svg";
const Header = () => {
    return(
        <header className={style.Header}>
            <div className={style.headerWrapper}>
                <div className={style.headerLogo}>
                    <img src={logo}></img>
                </div>
                <nav className={style.headerNav}>
                    <ul className={style.ulNav}>
                        <li><a className={style.linkA} href="/">Inicio</a></li>
                        <li><a className={style.linkA} href="/">Sobre</a></li>
                        <li><a className={style.linkA} href="/">linguagem</a></li>
                        <li><a className={style.linkA} href="/">Documentação</a></li>
                        <li><a className={style.linkLogin} href="/">Login</a></li>
                        <li><a className={style.linkRegistro} href="/">Registro</a></li>
                    </ul>
                </nav>
            </div>

        </header>
    );
};
export default Header;