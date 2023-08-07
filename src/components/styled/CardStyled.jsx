import { styled } from "styled-components";

export const CardStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

export const CardImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20vh;
  width: 40vw;
`;
export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  aspect-ratio: 1;
  object-fit: cover;
`;
