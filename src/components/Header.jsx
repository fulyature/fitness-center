import Button from "./styled/Button";
import HeaderStyled from "./styled/HeaderStyled";
import ImageStyled from "./styled/ImageStyled";
import Gym2 from "../assets/gym2.jpg";
const Header = () => {
  return (
    <HeaderStyled>
      <div>
        <h1>Welcome</h1>

        <p>
          We’re proud to have created one of the finest gyms in Surrey. It’s
          founded on the principle that everyone is different, but we are all
          entitled to maximum fitness and mental health. Enjoy space to work-out
          to your own programme or ask our qualified professional fitness staff
          who are always on hand to give equipment advice and training tips.
        </p>
        <Button primary>Start New Begginer</Button>
      </div>
      <ImageStyled src={Gym2} />
    </HeaderStyled>
  );
};
export default Header;
