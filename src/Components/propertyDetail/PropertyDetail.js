import styles from "./detail.module.scss";
const PropertyDetail = () => {
  return (
    <section className={styles.PropertyDetailWrapper}>
      <div className={styles.contentWrap}>
        <h2>property type and location</h2>
        <div className={styles.content}>
          <div className={styles.propertyDetail}>
            <div className="d-flex align-items-center mb-1">
              <p className="mb-0">property type:</p>
              <input type="text" name="" id="" />
              <input type="text" name="" id="" />
              <input type="text" name="" id="" />
            </div>
          </div>
          <div className={styles.propertyDetail}>
            <div className="d-flex align-items-center mb-1">
              <p className="mb-0">city:</p>
              <input type="text" name="" id="" />
            </div>
          </div>
          <div className={styles.propertyDetail}>
            <div className="d-flex align-items-center mb-1">
              <p className="mb-0">location:</p>
              <input type="text" name="" id="" />
            </div>
          </div>
        </div>
        <h2>property detail</h2>
        <div className={styles.content}>
          <div className={styles.propertyDetail}>
            <div className="d-flex align-items-center mb-1">
              <p className="mb-0">property title:</p>
              <input type="text" name="" id="" />
              <input type="text" name="" id="" />
              <input type="text" name="" id="" />
            </div>
          </div>
          <div className={styles.propertyDetail}>
            <div className="d-flex align-items-center mb-1">
              <p className="mb-0">description:</p>
              <input type="text" name="" id="" />
            </div>
          </div>
          <div className={styles.propertyDetail}>
            <div className="d-flex align-items-center mb-1">
              <p className="mb-0">land id:</p>
              <input type="text" name="" id="" />
            </div>
          </div>
          <div className={styles.propertyDetail}>
            <div className="d-flex align-items-center mb-1">
              <p className="mb-0">land adress:</p>
              <input type="text" name="" id="" />
            </div>
          </div>
        </div>
        <h2>owner detail</h2>
        <div className={styles.content}>
          <div className={styles.propertyDetail}>
            <div className="d-flex align-items-center mb-1">
              <p className="mb-0">owner name:</p>
              <input type="text" name="" id="" />
              <input type="text" name="" id="" />
              <input type="text" name="" id="" />
            </div>
          </div>
          <div className={styles.propertyDetail}>
            <div className="d-flex align-items-center mb-1">
              <p className="mb-0">owner adress:</p>
              <input type="text" name="" id="" />
            </div>
          </div>
          <div className={styles.propertyDetail}>
            <div className="d-flex align-items-center mb-1">
              <p className="mb-0">previous owner:</p>
              <input type="text" name="" id="" />
            </div>
          </div>
          <div className={styles.propertyDetail}>
            <div className="d-flex align-items-center mb-1">
              <p className="mb-0">register by:</p>
              <input type="text" name="" id="" />
            </div>
          </div>
        </div>
        <button>buy</button>
      </div>
      {/* <div className={styles.content}>
        <h2>property type</h2>
        <div className={styles.type}>
          <div>
            <p className="mb-3">property type:</p>
            <p className="mb-3">city:</p>
            <p className="mb-3">location:</p>
          </div>
          <div>
            <div className="mb-3">
              <input type="text" placeholder="home" />
              <input type="text" placeholder="plot" />
              <input type="text" placeholder="commercial" />
            </div>
            <div className="mb-3">
              <input type="text" placeholder="home" />
            </div>
            <div>
              <input type="text" placeholder="home" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <h2>property type</h2>
        <div className={styles.type}>
          <div>
            <p className="mb-3">property type:</p>
            <p className="mb-3">city:</p>
            <p className="mb-3">location:</p>
          </div>
          <div>
            <div className="mb-3">
              <input type="text" placeholder="home" />
              <input type="text" placeholder="plot" />
              <input type="text" placeholder="commercial" />
            </div>
            <div className="mb-3">
              <input type="text" placeholder="home" />
            </div>
            <div>
              <input type="text" placeholder="home" />
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
};
export default PropertyDetail;
