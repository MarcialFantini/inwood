import Image from "next/image";
import CardProductPopular from "../CardProductPopular";
import style from "./style.module.css";

import chair from "../../assets/products/chair1.png";

const data = [[], [], [], []];

function PopularProducts() {
  return (
    <section className={style.sectionProducts}>
      <h2 className={style.title}>Popular Products</h2>

      <picture className={style.pictureRelative}>
        <Image className={style.img} src={chair} alt="chair"></Image>
      </picture>

      <div className={style.containerProducts}>
        <div className={style.rowProducts}>
          {data.map(() => {
            return <CardProductPopular></CardProductPopular>;
          })}
        </div>
      </div>

      <button className={style.button}>Explore all items</button>
    </section>
  );
}

export default PopularProducts;
