import styles from "./header.module.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import profile from "../../Images/Vector.svg";
const Header = () => {
  return (
    <header className={styles.headerWrap}>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/" className="me-5">
            Logo
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/buy" className="customLink">
                Buy
              </Nav.Link>
              <Nav.Link href="#" className="customLink">
                Sell
              </Nav.Link>
              <Nav.Link href="/" className="customLink">
                Home
              </Nav.Link>
              <Nav.Link href="/detail" className="customLink">
                Plot
              </Nav.Link>
            </Nav>
            <div className="ms-auto d-flex justify-content-center align-items-center">
              <div className="profileImg">
                <img src={profile} alt="profile" />
              </div>
              <div className="userProfile">User Profile</div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
export default Header;
