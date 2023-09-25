import style from "./style.module.css";

function CardProduct() {
  return (
    <article className={style.productContainer}>
      <h2 className={style.title}>Bedroom</h2>
      <button className={style.button}>Explore</button>
    </article>
  );
}

export default CardProduct;
