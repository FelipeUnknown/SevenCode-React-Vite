import { useState } from "react";
import style from "../header/header.module.css";
import logo from "../../assets/img/Sevencode.svg";
import iconBars from "../../assets/img/menu-togle.svg";
import iconClose from "../../assets/img/menu-closer.svg";
const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const links = [
    { name: "Inicio", link: "/" },
    { name: "Sobre", link: "/" },
    { name: "Linguagem", link: "/" },
    { name: "Documentação", link: "/" },
  ];

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };
  return (
    <header className={`${style.Header} ${menuActive ? style.active : ""}`}>
      <div className={style.headerWrapper}>
        <div className={style.headerLogo}>
          <img src={logo}></img>
        </div>
        <button id={style.buttonMobile} onClick={toggleMenu}>
          <img
            src={menuActive ? iconClose : iconBars}
            id={style.menuIcons}
            alt="Icon Menu"
          />
        </button>
        <nav className={style.headerNav}>
          <ul className={style.ulNav} id={style.Menu}>
            {links.map((link, index) => (
              <li className={style.navLi} key={link.name}>
                <a href={link.link} className={style.linksMenuLi} key={index}>
                  {link.name}
                </a>
              </li>
            ))}
            ;
            <li>
              <a className={style.linkLogin} href="/">
                Login
              </a>
            </li>
            <li>
              <a className={style.linkRegistro} href="/">
                Registro
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
