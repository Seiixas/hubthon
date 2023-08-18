import GoogleButton from "react-google-button";
import { StyledWelcomeWrapper } from "./welcome.styles";
import { Link, useNavigate } from "react-router-dom";
import { MyStep } from "../../components/Stepper";
import { Whatsapp } from "../../components/whatsapp";

export function Welcome() {
  const navigate = useNavigate();

  return (
    <StyledWelcomeWrapper>
      <MyStep step={1} />
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
      <Link to="*" style={{ fontSize: "1rem" }}>
        Não possuo conta do Google
      </Link>
    </StyledWelcomeWrapper>
  );
}
