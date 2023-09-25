import logoSrc from "../../assets/navbar/icon5.png";
import item1 from "../../assets/navbar/icon1.svg";
import item2 from "../../assets/navbar/icon2.svg";
import item3 from "../../assets/navbar/icon4.svg";
import item4 from "../../assets/navbar/icon3.svg";

import Image from "next/image";
import style from "./style.module.css";

function Navbar() {
  return (
    <nav className={style.navBar}>
      <picture className={style.logoContainer}>
        <Image
          className={style.logoCompany}
          src={item4}
          alt="hamburger button"
        ></Image>
      </picture>

      <picture className={style.logoContainer}>
        <Image src={logoSrc} alt="logo" className={style.logoCompany} />
      </picture>
      <div className={style.containerIcons}>
        <Image className={style.logo} src={item1} alt="search"></Image>
        <Image className={style.logo} src={item2} alt="car shop"></Image>
        <Image className={style.logo} src={item3} alt="account"></Image>
      </div>
    </nav>
  );
}

export default Navbar;
