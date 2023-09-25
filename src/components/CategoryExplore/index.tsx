import Image from "next/image";
import style from "./style.module.css";
import icon1 from "../../assets/categorys/icon1.svg";
import icon2 from "../../assets/categorys/icon3.svg";
import CardProduct from "../CardProduct";

const data = [[], [], [], []];

function CategoryExplore() {
  return (
    <section className={style.container}>
      <div className={style.categorySearch}>
        <h2 className={style.title}>Explore by Category</h2>
        <div className={style.containerInput}>
          <picture className={style.iconSearch}>
            <Image className={style.icon} alt="search " src={icon1}></Image>
          </picture>
          <input placeholder="Search" className={style.input} type="text" />
          <picture className={style.picture}>
            <Image className={style.icon} alt="search " src={icon2}></Image>
          </picture>
        </div>
      </div>

      <div className={style.containerGrid}>
        {data.map((item) => {
          return <CardProduct></CardProduct>;
        })}
      </div>
    </section>
  );
}

export default CategoryExplore;
