import styled from "styled-components";

export const FooterStyled = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #8b2a5a;
  color: white;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export default FooterStyled;
