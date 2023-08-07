import NavStyled from "./styled/NavStyled";
import logo from "../assets/fitness-logo.webp";
import Button from "./styled/Button";
import HeaderStyled from "./styled/HeaderStyled";

const Nav = () => {
  return (
    <NavStyled>
      <div>
        <img src={logo} width="350px" alt="" />
      </div>
      <HeaderStyled>
        <h1 style={{ fontSize: "2.5rem" }}>FITNESS CENTER</h1>
      </HeaderStyled>

      <div>
        <Button>Join Us</Button>
        <Button primary>Call Us</Button>
      </div>
    </NavStyled>
  );
};
export default Nav;
