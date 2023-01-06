import styles from "./home.module.scss";
import { BiSearch } from "react-icons/bi";

const Home = () => {
  return (
    <section className={styles.homeWrapper}>
      <div className={styles.content}>
        <h1>find new property</h1>
        <div>
          <button>buy</button>
          <button>Sell</button>
          <button>home</button>
          <button>plot</button>
        </div>
        <div className={styles.searchWrap}>
          <input type="text" placeholder="Search" />
          <span>
            <BiSearch />
          </span>
        </div>
      </div>
    </section>
  );
};
export default Home;
