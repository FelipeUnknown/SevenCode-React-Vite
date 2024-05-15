import style from "../feature/feature.module.css";
import ftSection2 from "../../assets/img/ftsection2.png";
const Feature = () => {
  return (
    <section className={style.Feature}>
      <div className={style.featureWrapper}>
        <div className={style.featureImg}>
          <img src={ftSection2}></img>
        </div>
        <div className={style.featureContent}>
          <h2>
            É hora de se juntar aos milhares de criadores, artistas e
            desenvolvedores que usam Nineseven.
          </h2>
          <div className={style.featureDivBtn}>
            <a className={style.saibaMaisBtn} href="/">
              Saiba mais
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Feature;
