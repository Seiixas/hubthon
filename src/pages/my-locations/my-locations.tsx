import { useState } from "react";
import { SideMenu } from "../../components/SideMenu";
import { StyledMyLocationsWrapper } from "./my-locations.styles";
import { Avatar } from "@mui/material";

export const locationsMocked = [
  {
    id: 0,
    name: "HubLocal",
    address:
      "R. Pereira Valente, 578 - Sala 1305 a 1308 - Meireles, Fortaleza - CE, 60160-250",
    phone: "0800 944 1340",
    latLng: [-3.7326114, -38.4969782],
  },
  {
    id: 1,
    name: "Toinho Contabilidades",
    address: "Rua do Fulano, 456 - Bairro - Cidade - ESTADO",
    phone: "(85) 98888-0283",
    latLng: [-3.7343347, -38.5130627],
  },
  {
    id: 2,
    name: "Benevides SoftHouse",
    address: "Rua dos Programas, 100 - Bairro - Cidade - ESTADO",
    phone: "(85) 98888-0283",
    latLng: [-3.7332229, -38.5093885],
  },
];

export function MyLocations() {
  const [latLngSelected, setLatLngSelected] = useState<number[]>([
    -3.7329038, -38.4981373,
  ]);

  const [activeLocation, setActiveLocation] = useState(0);

  return (
    <StyledMyLocationsWrapper>
      <div id="locations">
        <h1 style={{ marginBottom: "1rem" }}>Seus Pontos de Venda</h1>
        {locationsMocked.map((location, index) => (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "1rem",
              marginBottom: "1rem",
              cursor: "pointer",
              color: location.id === activeLocation ? "#0385fdff" : "#000000",
            }}
            onClick={() => setActiveLocation(location.id)}
          >
            <Avatar>{index + 1}</Avatar>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <strong style={{ fontSize: "1rem" }}>{location.name}</strong>
              <i style={{ fontSize: "1rem" }}>{location.address}</i>
            </div>
          </div>
        ))}
      </div>
      <SideMenu activeLocation={activeLocation} />
    </StyledMyLocationsWrapper>
  );
}
