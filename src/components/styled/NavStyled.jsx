import styled from "styled-components";

export const NavStyled = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
  }
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export default NavStyled;
