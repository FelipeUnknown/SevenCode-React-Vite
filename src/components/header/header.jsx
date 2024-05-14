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
                    <ul>
                        <li><a className={style.linkA}>Inicio</a></li>
                        <li><a className={style.linkA}>Sobre</a></li>
                        <li><a className={style.linkA}>linguagem</a></li>
                        <li><a className={style.linkA}>Documentação</a></li>
                        <li><a className={style.linkLogin}>Login</a></li>
                        <li><a className={style.linkRegistro}>Registro</a></li>
                    </ul>
                </nav>
            </div>

        </header>
    );
};
export default Header;