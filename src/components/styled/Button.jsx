import styled from "styled-components";

const Button = styled.button`
  background-color: ${({ primary }) => (primary ? "#331D2C" : "white")};
  color: ${({ primary }) => (primary ? "white" : "#331D2C")};
  border: 1px solid #331d2c;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  padding: 1rem 1.2rem;
  font-size: 1.1rem;
  margin-right: 0.5rem;
  margin: 1rem 0.5rem;
  &:hover {
    opacity: 0.9;
    transform: scale(0.95);
    cursor: pointer;
    color: red;
  }
`;

export default Button;
