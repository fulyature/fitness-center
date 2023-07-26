import NavStyled from "./styled/NavStyled";

import Button from "./styled/Button";

const Nav = () => {
  return (
    <NavStyled>
      <div>
        <img src="/src/assets/fitness-logo.webp" width="200px" alt="" />
      </div>

      <div>
        <Button>Join Us</Button>
        <Button primary>Call Us</Button>
      </div>
    </NavStyled>
  );
};
export default Nav;
