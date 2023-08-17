import { styled } from "styled-components";

export const StyledLoginFormWrapper = styled.section`
  display: flex;
  justify-content: center;
  form {
    width: 100%;
    margin: 15rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;

    font-size: 1rem;

    input {
      font-size: 1rem;
      width: 100%;
      height: 3rem;
    }
  }

  order: 2;
`;

export const StyledAsideWrapper = styled.section`
  order: 1;
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.colors.primary};
`;

export const StyledLoginWrapper = styled.main`
  display: grid;
  grid-template-columns: 0.75fr 1.25fr;
  width: 100%;
  height: 100%;
`;
