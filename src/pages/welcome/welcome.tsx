import GoogleButton from "react-google-button";
import { StyledWelcomeWrapper } from "./welcome.styles";
import { useNavigate } from "react-router-dom";

export function Welcome() {
  const navigate = useNavigate();

  return (
    <StyledWelcomeWrapper>
      <h1>Seja bem-vindo!</h1>
      <p>
        Para começarmos nossa jornada com o pé direito, é necessário fazer
        log-in com seu perfil da empresa do Google com os seus pontos de venda.
      </p>
      <GoogleButton
        onClick={() => {
          navigate("/platform-link");
        }}
      />
    </StyledWelcomeWrapper>
  );
}
