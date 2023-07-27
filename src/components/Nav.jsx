import NavStyled from "./styled/NavStyled";
import logo from "../assets/fitness-logo.webp";
import Button from "./styled/Button";

const Nav = () => {
  return (
    <NavStyled>
      <div>
        <img src={logo} width="500px" alt="" />
      </div>

      <div>
        <Button>Join Us</Button>
        <Button primary>Call Us</Button>
      </div>
    </NavStyled>
  );
};
export default Nav;
