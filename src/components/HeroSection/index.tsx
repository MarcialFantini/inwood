import style from "./style.module.css";

function HeroSection() {
  return (
    <section className={style.containerHero}>
      <div className={style.containerText}>
        <h1 className={style.titlePrincipal}>
          Exclusive Deals of Furniture Collection
        </h1>
        <h2 className={style.subTitle}>
          Explore different categories. Find the best deals.
        </h2>
        <button className={style.button}>Shop Now</button>
      </div>
    </section>
  );
}

export default HeroSection;
