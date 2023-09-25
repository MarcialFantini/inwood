import Image from "next/image";
import style from "./style.module.css";
import imgDefault from "../../assets/products/chair1.png";

function CardProductPopular() {
  return (
    <article className={style.containerArticle}>
      <picture className={style.picture}>
        <Image className={style.img} src={imgDefault} alt="products "></Image>
      </picture>
      <h3>Armchair</h3>
      <p>Light single chair </p>
      <p>$145</p>
    </article>
  );
}

export default CardProductPopular;
