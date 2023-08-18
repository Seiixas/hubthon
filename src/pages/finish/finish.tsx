import { Button } from "@mui/material";
import Confetti from "react-confetti";
import { useNavigate } from "react-router-dom";
import { useWindowSize } from "react-use";

export const Finish = () => {
  const { width, height } = useWindowSize();
  const navigate = useNavigate();

  return (
    <>
      <Confetti width={width} height={height} />
      <div style={{ maxWidth: "650px", textAlign: "center" }}>
        <h1>Seja bem-vindo! 🥳</h1>
        <p>
          Os seus locais foram criados com sucesso! Agora verifique os seus
          locais navegando na nossa plataforma.
        </p>
        <Button
          variant="contained"
          sx={{ fontSize: "1.5rem", fontWeight: "bold", marginTop: "2rem" }}
          onClick={() => navigate('/my-locations')}
        >
          Continuar
        </Button>
      </div>
    </>
  );
};
