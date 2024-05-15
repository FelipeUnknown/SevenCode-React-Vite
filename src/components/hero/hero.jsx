import style from "../hero/hero.module.css";
import imgSection1 from "../../assets/img/ftsection1.png";
const Hero = () => {
  return (
    <section className={style.Hero}>
      <div className={style.heroWrapper}>
        <div className={style.heroContent}>
          <h1>Poderoso para Devs. Rápido e fácil uso.</h1>
          <p>
            Leve nossa IDE para sua equipe. Ninesevem oferece suporte a
            experiências para usuários avançados, novos consumidores e todos os
            demais.
          </p>
          <div className={style.heroDivbtn}>
            <a className={style.linkSaibaMais} href="/">Saiba mais</a>
            <a className={style.linkSobrenos} href="/">Sobre nós</a>
          </div>
        </div>
        <div className={style.heroImg}>
          <img src={imgSection1}></img>
        </div>
      </div>
    </section>
  );
};
export default Hero;
