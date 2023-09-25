import ArticleBenefits from "../ArticleBenefits";
import style from "./style.module.css";

import payment from "../../assets/icons/Group 27.svg";
import policy from "../../assets/icons/icon1.svg";
import support from "../../assets/icons/Group (1).svg";

function Benefits() {
  return (
    <section className={style.containerBenefits}>
      <h2 className={style.principalTitle}>Benefits for your expediency</h2>
      <ArticleBenefits
        srcImg={payment}
        title="Payment Method"
        text="We offer flexible payment
options, to make easier."
      ></ArticleBenefits>
      <ArticleBenefits
        srcImg={policy}
        title="Return policy"
        text="You can return a product 
within 30 days."
      ></ArticleBenefits>
      <ArticleBenefits
        srcImg={support}
        title="Customer Support"
        text="Our customer support 
is 24/7."
      ></ArticleBenefits>
    </section>
  );
}

export default Benefits;
