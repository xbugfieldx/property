import Header from "../Header/Header";
import styles from "./layout.module.scss";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
