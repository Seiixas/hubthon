import { StyledCreateCompanyWrapper } from "./create-company.styles";
import { useNavigate } from "react-router-dom";
import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { isEmpty } from "ramda";
import { MyStep } from "../../components/Stepper";

export function CreateCompany() {
  const navigate = useNavigate();

  const [company, setCompany] = useState("");

  return (
    <StyledCreateCompanyWrapper>
      <MyStep step={0} />
      <h1>Olá! 👋</h1>
      <p>Antes de tudo, nos diga o nome da sua empresa!</p>
      <Box sx={{ display: "flex", flexDirection: "column", gap: ".5rem" }}>
        <TextField
          sx={{
            "& .MuiInputBase-root": {
              width: 400,
            },
          }}
          onChange={(e) => setCompany(e.target.value)}
        />
      </Box>
      <Button
        variant="contained"
        onClick={() => {
          localStorage.setItem('company-name', company);
          navigate("/link-google")
        }}
        disabled={isEmpty(company)}
      >
        Próximo
      </Button>
    </StyledCreateCompanyWrapper>
  );
}
