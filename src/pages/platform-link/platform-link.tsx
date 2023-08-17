import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocationCityIcon from "@mui/icons-material/LocationCity";

import {
  Button,
  ListItemAvatar,
  ListItemText,
  ListItem,
  Avatar,
  List,
  Box,
} from "@mui/material";
import { StyledPlatformWrapper } from "./platform-link.styles";

const locationsMocked = [
  {
    id: "id",
    name: "HubLocal",
    address:
      " R. Pereira Valente, 578 - Sala 1305 a 1308 - Meireles, Fortaleza - CE, 60160-250",
    state_of_merchant: true,
    type: "success",
  },
  {
    id: "id-2",
    name: "Angulo Digital",
    address:
      "R. Monsenhor Bruno, 1153 - Sala 526 - Aldeota, Fortaleza - CE, 60115-191",
    type: "primary",
  },
  {
    id: "id-3",
    name: "MidiaT",
    address:
      "Scopa Platinum - R. Monsenhor Bruno, 1153 - Sala 524 - Meireles, Fortaleza - CE, 60115-191",
    type: "error",
  },
];

export function PlatformLink() {
  function handleButton(type: string) {
    if (type === "primary") {
      return <Button variant="outlined">Conectar</Button>;
    }
    if (type === "error") {
      return (
        <Button variant="outlined" color="error">
          Verificar
        </Button>
      );
    }
    if (type === "success") {
      return (
        <Button variant="outlined" color="success">
          Conectado
        </Button>
      );
    }
  }

  return (
    <StyledPlatformWrapper>
      <section>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "auto auto",
            gap: "1rem",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <h6 style={{ color: "#FFB219" }}>Atenção</h6>
            <i style={{ fontSize: "15px" }}>
              Você estará operando esta empresa:
            </i>
          </Box>

          <ListItem
            sx={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: "#0385fdff" }}>
                <LocationCityIcon />
              </Avatar>
            </ListItemAvatar>
            <span>HubLocal</span>
          </ListItem>
        </Box>
      </section>
      <section>
        <header>
          <h3>Listagem de Locais</h3>
        </header>
        <article>
          <List
            sx={{
              width: "100%",
              maxWidth: 650,
              bgcolor: "background.paper",
            }}
          >
            {locationsMocked.map((location) => (
              <ListItem
                sx={{
                  display: "flex",
                  gap: "1rem",
                }}
                key={location.id}
              >
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: "#00da91ff" }}>
                    <LocationOnIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={location.name}
                  secondary={location.address}
                />

                {handleButton(location.type)}
              </ListItem>
            ))}
          </List>
        </article>
      </section>
    </StyledPlatformWrapper>
  );
}
