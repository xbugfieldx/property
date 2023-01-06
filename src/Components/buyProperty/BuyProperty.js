import styles from "./buy.module.scss";
import house from "../../Images/house.jpg";
import { Link } from "react-router-dom";

const BuyProperty = () => {
  return (
    <section className={styles.BuyPropertyWrap}>
      <div className={styles.content}>
        <img src={house} alt="house" />
        <div>
          <p>
            Price <span>$1500</span>
          </p>
          <p>
            title <span>Brand new home</span>
          </p>
          <p>
            location <span>Gulbery 3</span>
          </p>
          <Link to={"/detail"}>see detail</Link>
        </div>
      </div>
    </section>
  );
};

export default BuyProperty;
