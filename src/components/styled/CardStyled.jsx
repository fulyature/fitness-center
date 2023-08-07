import { styled } from "styled-components";

export const CardStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
  box-shadow: rgb(0 0 0 / 40%) 0px 0px 10px;
`;

export const CardImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20vh;
  width: 40vw;
`;
export const CardImage = styled.img`
  width: 80%;
  height: 80%;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 10px;
`;
