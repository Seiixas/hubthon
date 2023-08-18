import { locationsMocked } from "../pages/my-locations/my-locations";
import { StyledSideMenuWrapper } from "./SideMenu.styles";

import StarBorderIcon from "@mui/icons-material/StarBorder";
import SsidChartIcon from "@mui/icons-material/SsidChart";
import FeedIcon from "@mui/icons-material/Feed";
import CreateIcon from "@mui/icons-material/Create";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import EngineeringIcon from "@mui/icons-material/Engineering";
import HelpIcon from "@mui/icons-material/Help";

import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { lighten } from "@mui/material";
import { useEffect, useState } from "react";

const MyMap = ({ location }: { location: any }) => {
  const map = useMap();

  useEffect(() => {
    map.setView([location.latLng[0], location.latLng[1]]);
  }, [location])

  map.setView([50,50]);

  return <></>
}

export const SideMenu = ({ activeLocation }: { activeLocation: number }) => {
  const [location, setLocation] = useState({
    id: 0,
    name: "HubLocal",
    address:
      "R. Pereira Valente, 578 - Sala 1305 a 1308 - Meireles, Fortaleza - CE, 60160-250",
    phone: "0800 944 1340",
    latLng: [-3.7326114, -38.4969782],
  });

  useEffect(() => {
    const _location = locationsMocked.find(
      (location) => location.id === activeLocation
    );

    if (!_location) {
      return;
    }

    setLocation(_location);
  }, [activeLocation]);

  return (
    <StyledSideMenuWrapper>
      <header style={{ margin: "1rem", height: "11vh" }}>
        <p style={{ color: 'white'}}>Você acabou de selecionar: </p>
        <strong style={{ color: 'white'}}>{location!.name}</strong>
      </header>
      <MapContainer
        center={[location!.latLng[0], location!.latLng[1]]}
        zoom={17}
        style={{ height: "60vh", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <MyMap location={location} />
        {locationsMocked.map(({ name, latLng }) => (
          <Marker position={[latLng[0], latLng[1]]}>
            <Popup>{name}</Popup>
          </Marker>
        ))}
      </MapContainer>
      <footer style={{ margin: "1rem", height: "5vh" }}>
        <header>
          <h3 style={{ color: 'white' }}>Ações</h3>
        </header>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            marginTop: "1rem",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              background: lighten("#0385fdff", 0.2),
              color: "#ffffff",
              borderRadius: "5px",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "2rem 1rem",
              width: "8rem",
              height: "8rem",
            }}
          >
            <CreateIcon fontSize={"large"} />
            <i style={{ fontSize: "1rem" }}>Editar</i>
          </div>
          <div
            style={{
              background: lighten("#0385fdff", 0.2),
              color: "#ffffff",
              borderRadius: "5px",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "2rem 1rem",
              width: "8rem",
              height: "8rem",
            }}
          >
            <SsidChartIcon fontSize={"large"} />
            <i style={{ fontSize: "1rem" }}>Relatórios</i>
          </div>{" "}
          <div
            style={{
              background: lighten("#0385fdff", 0.2),
              color: "#ffffff",
              borderRadius: "5px",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "2rem 1rem",
              width: "8rem",
              height: "8rem",
            }}
          >
            <StarBorderIcon fontSize={"large"} />
            <i style={{ fontSize: "1rem" }}>Avaliações</i>
          </div>
          <div
            style={{
              background: lighten("#0385fdff", 0.2),
              color: "#ffffff",
              borderRadius: "5px",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "2rem 1rem",
              width: "8rem",
              height: "8rem",
            }}
          >
            <PhotoCameraIcon fontSize={"large"} />
            <i style={{ fontSize: "1rem" }}>Galeria</i>
          </div>{" "}
          <div
            style={{
              background: lighten("#0385fdff", 0.2),
              color: "#ffffff",
              borderRadius: "5px",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "2rem 1rem",
              width: "8rem",
              height: "8rem",
            }}
          >
            <FeedIcon fontSize={"large"} />
            <i style={{ fontSize: "1rem" }}>Postagem</i>
          </div>{" "}
          <div
            style={{
              background: lighten("#0385fdff", 0.2),
              color: "#ffffff",
              borderRadius: "5px",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "2rem 1rem",
              width: "8rem",
              height: "8rem",
            }}
          >
            <EngineeringIcon fontSize={"large"} />
            <i style={{ fontSize: "1rem" }}>Serviços</i>
          </div>{" "}
          <div
            style={{
              background: lighten("#0385fdff", 0.2),
              color: "#ffffff",
              borderRadius: "5px",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "2rem 1rem",
              width: "8rem",
              height: "8rem",
            }}
          >
            <HelpIcon fontSize={"large"} />
            <i style={{ fontSize: "1rem" }}>Ajuda</i>
          </div>{" "}
        </div>
      </footer>
    </StyledSideMenuWrapper>
  );
};
