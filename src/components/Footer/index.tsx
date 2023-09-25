import Image from "next/image";
import style from "./style.module.css";

import social1 from "../../assets/social/icon1.svg";
import social2 from "../../assets/social/icon2.svg";
import social3 from "../../assets/social/icon3.svg";
import social4 from "../../assets/social/icon4.svg";
import social5 from "../../assets/social/icon5.svg";

import iconPage from "../../assets/social/inWood.png";

function Footer() {
  return (
    <footer className={style.footerContainer}>
      <div className={style.firstContainer}>
        <div className={style.details}>
          <picture className={style.containerLogo}>
            <Image src={iconPage} alt="icon page"></Image>
          </picture>
        </div>

        <div className={style.rowSocials}>
          <picture className={style.pictureSocial}>
            <Image src={social1} alt="" className={style.imgSocial}></Image>
          </picture>
          <picture className={style.pictureSocial}>
            <Image src={social2} alt="" className={style.imgSocial}></Image>
          </picture>
          <picture className={style.pictureSocial}>
            <Image src={social3} alt="" className={style.imgSocial}></Image>
          </picture>
          <picture className={style.pictureSocial}>
            <Image src={social4} alt="" className={style.imgSocial}></Image>
          </picture>
          <picture className={style.pictureSocial}>
            <Image src={social5} alt="" className={style.imgSocial}></Image>
          </picture>
        </div>

        <div className={style.containerDirection}>
          <p className={style.text1}>Address </p>
          <p>+123 654 987 877 The Bronx, NY </p>
          <p>14568, USA </p>
        </div>
      </div>
      <div className={style.secondContainer}>
        <div className={style.containerSection}>
          <h3 className={style.titleLinks}>My Account</h3>
          <ul className={style.list}>
            <li>Sign in</li>
            <li>Register</li>
            <li>Order status</li>
          </ul>
        </div>
        <div className={style.containerSection}>
          <h3 className={style.titleLinks}>Help</h3>
          <ul className={style.list}>
            <li>Shipping</li>
            <li>Returns</li>
            <li>Sizing</li>
          </ul>
        </div>
      </div>
      <div className={style.thirdContainer}>
        <div className={style.containerSection}>
          <h3 className={style.titleLinks}>Shop</h3>
          <ul className={style.list}>
            <li>All Products</li>
            <li>Bedroom</li>
            <li>Dinning Room</li>
          </ul>
        </div>
        <div className={style.containerSection}>
          <h3 className={style.titleLinks}>Legal Stuff</h3>
          <ul className={style.list}>
            <li>Shipping & Delivery</li>
            <li>Terms & Conditions</li>
            <li>Privacy & Policy</li>
          </ul>
        </div>
      </div>

      <div>
        <p className={style.copy}>
          Copyright ©2020 INWOOD. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
