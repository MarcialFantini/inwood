import Image from "next/image";
import style from "./style.module.css";

interface props {
  title: string;
  srcImg: string;
  text: string;
}

function ArticleBenefits({ title, srcImg, text }: props) {
  return (
    <article className={style.containerArticle}>
      <picture className={style.picture}>
        <Image className={style.img} src={srcImg} alt={title}></Image>
      </picture>
      <h3 className={style.titleArticle}>{title}</h3>
      <p className={style.textArticle}>{text}</p>
    </article>
  );
}

export default ArticleBenefits;
