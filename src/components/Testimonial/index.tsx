import Image from "next/image";
import style from "./style.module.css";

function Testimonial() {
  return (
    <section className={style.section}>
      <div>
        <h2 className={style.principalTitle}>Testimonials</h2>
        <p className={style.subTitle}>Over 15,000 happy customers.</p>
      </div>
      <article className={style.containerArticle}>
        <picture className={style.picture}>
          <Image
            src={""}
            className={style.img}
            alt="image person testimonial"
          ></Image>
        </picture>
        <p className={style.textArticle}>
          “My experience with Mark is a complete sucess, from customer service,
          wide range of products, clean store, purchasing experience, the
          newsletter.Thank you.”
        </p>

        <div className={style.containerName}>
          <h3 className={style.titleName}>Leona Paul</h3>
          <p className={style.subTitleName}>CEO of Floatcom</p>
        </div>
      </article>
    </section>
  );
}

export default Testimonial;
