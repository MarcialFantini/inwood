import Image from "next/image";
import style from "./style.module.css";

function NewsLetter() {
  return (
    <section className={style.containerSection}>
      <picture className={style.pictureNewsLetter}>
        <Image src={""} alt="Image of our news letter"></Image>
      </picture>

      <div className={style.textContainer}>
        <h2 className={style.title}>
          Join Our <span className={style.span}>Newsletter</span>
        </h2>
        <p className={style.text}>
          Receive exclusive deals, discounts and many offers.
        </p>
        <input
          className={style.input}
          placeholder="Enter your email"
          type="text"
        />
        <button className={style.button}>Subscribe</button>
      </div>
    </section>
  );
}

export default NewsLetter;
