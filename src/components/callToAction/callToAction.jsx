import style from "../callToAction/callToAction.module.css";
import imgSection3 from "../../assets/img/globos3.png";
const CallToAction = () => {
  return (
    <section className={style.CallToAction}>
      <div className={style.ctaWrapper}>
        <div className={style.ctaContainer}>
          <div className={style.ctaContent}>
            <h2>Sistemas feito de Devs para Devs.</h2>
            <p>
              Conheça nossos novos recursos, novos commits, novas propostas e
              muito mais.
            </p>
            <div>
              <a href="/" className={style.ctaBtn}>
                Registrar
              </a>
            </div>
          </div>
          <div className={style.ctaImg}>
            <img src={imgSection3} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default CallToAction;
