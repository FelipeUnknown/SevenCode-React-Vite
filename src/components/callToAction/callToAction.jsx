import style from "../callToAction/callToAction.module.css";
import imgSection3 from "../../assets/img/globos3.png";
const CallToAction = () => {
  return (
    <section className={style.CallToAction}>
      <div className={style.ctaWrapper}>
        <div className={style.ctaContainer}>
          <div className={style.ctaContent}>
            <div className={style.ctaText}>
              <h2>Sistemas feito de Devs para Devs.</h2>
              <p>
                Conheça nossos novos recursos, novos commits, novas propostas e
                muito mais.
              </p>
              <div className={style.ctaBtnDiv}>
                <a className={style.ctaBtn} href="/">Registrar</a>
              </div>
            </div>
            <div className={style.ctaImgDiv}>
              <img className={style.ctaImg} src={imgSection3}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CallToAction;
