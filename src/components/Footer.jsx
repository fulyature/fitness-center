import FooterStyled from "./styled/FooterStyled";
import ImageStyled from "./styled/ImageStyled";
import Logo from "../assets/fitness-logo.webp";
import HeaderStyled from "./styled/HeaderStyled";

const Footer = () => {
  return (
    <FooterStyled>
      <div>
        <ImageStyled src={Logo} />
      </div>
      <HeaderStyled>
        <h1>FITNESS CENTER</h1>
      </HeaderStyled>

      <div>
        <p>About us</p>
        <p>Contact us</p>
        <p>Visit our Blog</p>
      </div>
    </FooterStyled>
  );
};
export default Footer;
