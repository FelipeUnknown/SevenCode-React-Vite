import style from "../footer/footer.module.css";
import footerLogo from "../../assets/img/Sevencode.svg";
const Footer = () => {
  return (
    <footer className={style.Footer}>
      <div className={style.footerWrapper}>
        <div className={style.footerContent}>
          <div className={style.footerLogoDiv}>
            <img src={footerLogo} className={style.logo}></img>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in
              aliquet justo.
            </p>
          </div>
          <div className={style.footerInput}>
            <form>
              <span>
                Inscreva-se para saber de novidades do mundo uno. Se inscreva-se
                abaixo agora!
              </span>
              <div className={style.divInput}>
                <input
                  type="text"
                  placeholder="Digite seu email"
                  className={style.input}
                />
              </div>
              <div className={style.btnDiv}>
                <button className={style.footerBtn} href="/">Cadastre-se</button>
              </div>
            </form>
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
