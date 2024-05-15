import style from "../footer/footer.module.css";
import footerLogo from "../../assets/img/Sevencode.svg";
const Footer = () => {
  return (
    <footer className={style.Footer}>
      <div className={style.footerWrapper}>
        <div className={style.content}>
          <div className={style.footerLogoDiv}>
            <img src={footerLogo} className={style.logo}></img>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in
              aliquet justo.
            </p>
          </div>
          <div className={style.footerInput}>
            <p>
              Inscreva-se para saber de novidades do mundo uno. Se inscreva-se
              abaixo agora!
            </p>
          </div>
        </div>
        <div className={style.footerCopy}>
          <p>&copy; 2023 Ninesevem. Todos os direitos reservados.</p>
          <div className={style.footerTerms}>
            <a className={style.linkA} href="/">
              Política de privacidade
            </a>
            <a className={style.linkA} href="/">
              Termos de uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
