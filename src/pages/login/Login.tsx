import { useState } from "react";
import {
  StyledLoginFormWrapper,
  StyledAsideWrapper,
  StyledLoginWrapper,
} from "./Login.styles";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export function Login() {
  const usersMocked = [
    {
      id: "c876a6e4-eea7-46a4-ba90-e753aca60735",
      name: "John Doe",
      email: "john@doe.com",
      password: "123123123",
    },
  ];

  const navigate = useNavigate();

  const [type, setType] = useState("login");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  function handleLogin() {
    if (type === "login") {
      const user = usersMocked.find(
        (user) => user.email === email && user.password === password
      );

      if (!user) {
        alert("E-mail ou senha incorreto(s).");
      }

      navigate("/");

      return;
    }

    usersMocked.push({
      id: "c876a6e4-eea7-46a4-ba90-e753aca60710",
      name,
      email,
      password,
    });

    alert("Usuário criado com sucesso!");
  }

  return (
    <StyledLoginWrapper>
      <StyledLoginFormWrapper>
        <form onSubmit={handleLogin}>
          {type === "create" && (
            <>
              <label htmlFor="name">Nome</label>
              <input
                type="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                id="name"
              />
            </>
          )}
          <label htmlFor="email">E-mail</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
          />
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "1rem",
            }}
          >
            <Button variant="contained">
              {type !== "create" ? "Entrar" : "Cadastrar"}
            </Button>
            {type !== "create" && (
              <Button
                variant="outlined"
                color="inherit"
                onClick={() => setType("create")}
              >
                Cadastrar
              </Button>
            )}
          </Box>
        </form>
      </StyledLoginFormWrapper>
      <StyledAsideWrapper></StyledAsideWrapper>
    </StyledLoginWrapper>
  );
}
