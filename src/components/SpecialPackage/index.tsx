import style from "./style.module.css";
import stars from "../../assets/specialPackage/Star.svg";
import carImgSrc from "../../assets/icons/Icon color (6).svg";
import productTest from "../../assets/products/chair1.png";
import Image from "next/image";

function SpecialPackage() {
  return (
    <section className={style.sectionPackage}>
      <h2 className={style.title}>Special Package</h2>
      <article className={style.containerArticle}>
        <div className={style.containerText}>
          <div className={style.containerStars}>
            <p className={style.titleProduct}>Larkin Wood Full Set</p>
            <picture>
              <Image src={stars} alt="stars of the product" />
            </picture>
            <p className={style.price}>$729.99</p>
          </div>
          <button className={style.button}>
            Add to cart
            <Image className={style.imgCar} src={carImgSrc} alt="Car"></Image>
          </button>
        </div>

        <picture className={style.pictureProduct}>
          <Image
            className={style.imgProduct}
            src={productTest}
            alt="product special"
          ></Image>
        </picture>
        <div className={style.containerDescription}>
          <h3 className={style.titleDescription}>Description</h3>
          <p className={style.textDescription}>
            Cast Aluminum Outdoor Chaise Lounge As an elegant and classic touch
            to your outdoor space, this cast...
          </p>
        </div>
      </article>
      <div className={style.line}></div>
    </section>
  );
}

export default SpecialPackage;
