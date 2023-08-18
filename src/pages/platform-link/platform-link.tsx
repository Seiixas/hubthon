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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TablePagination,
} from "@mui/material";
import { StyledLoading, StyledPlatformWrapper } from "./platform-link.styles";
import { ChangeEvent, MouseEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyStep } from "../../components/Stepper";
import { Whatsapp } from "../../components/whatsapp";

const locationsMocked = [
  {
    id: "id",
    name: "HubLocal",
    address:
      " R. Pereira Valente, 578 - Sala 1305 a 1308 - Meireles, Fortaleza - CE, 60160-250",
    state_of_merchant: true,
    type: "primary",
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
    name: "Farmácias Pague Menos",
    address:
      "Av. Senador Virgilio Távora, 665 - Lojas 5 a 8 - Meireles, Fortaleza - CE, 60160-265",
    type: "primary",
  },
  {
    id: "id-4",
    name: "MidiaT",
    address:
      "Scopa Platinum - R. Monsenhor Bruno, 1153 - Sala 524 - Meireles, Fortaleza - CE, 60115-191",
    type: "error",
  },
  {
    id: "id-5",
    name: "Cobasi Aldeota: Pet Shop, Rações, Petiscos, Medicamentos em Fortaleza",
    address:
      " Av. Santos Dumont, 3860 - Loja 4 A 9 - Aldeota, Fortaleza - CE, 60150-162",
    type: "primary",
  },
];

export function PlatformLink() {
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [locationsData, setLocationsData] = useState(locationsMocked);
  const totalOfLocations = locationsData.length;
  const totalOfLinkedLocations = locationsData.filter(location => location.type === 'success').length;
  const limitOfLocations = 50;
  const companyName = localStorage.getItem('company-name');

  const navigate = useNavigate();

  const handleChangePage = (
    event: MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = (index: string, verify = false) => {
    setLocationsData((prev) =>
      prev.map((location) =>
        location.id === index ? { ...location, type: verify ? "loading" : "success" } : location
      )
    );

    if (verify) {
      setTimeout(() => {
        setLocationsData((prev) =>
        prev.map((location) =>
          location.id === index ? { ...location, type: "success" } : location
        )
    );
      }, 1000);
    }
  };

  function handleButton(type: string, index: string) {
    if (type === "primary") {
      return (
        <Button variant="contained" onClick={() => handleClick(index)}>
          Conectar
        </Button>
      );
    }
    if (type === "error") {
      return (
        <Button variant="contained" color="error" onClick={() => handleClick(index, true)}>
          Verificar
        </Button>
      );
    }
    if (type === "success") {
      return (
        <Button
          variant="contained"
          color="success"
          style={{ cursor: "default" }}
          disabled
          onClick={() => handleClick(index)}
        >
          Conectado
        </Button>
      );
    }
    if (type === 'loading') {
      return (
        <Button>
          <StyledLoading />
        </Button>
      )
    }
  }

  const handleConnectAllLocations = () => {
    setLocationsData(prev => prev.map(location => ({
      ...location,
      type: 'success',
    })));
    handleClose();
  }

  return (
    <div style={{ display: "flex" }}>
      <StyledPlatformWrapper>
        <MyStep step={2} />
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
              <span>{companyName || 'Empresa'}</span>
            </ListItem>
          </Box>
        </section>
        <section
          style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
        >
          <header
            style={{ display: "flex", flexDirection: "column", gap: ".5rem" }}
          >
            <h3>Listagem de Locais</h3>
            <h6>Foram encontrados {totalOfLocations} locais neste perfil</h6>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Button variant="contained" onClick={handleClickOpen}>
                Conectar todos os locais
              </Button>
              <div style={{ display: 'grid' }}>
              <p style={{ margin: "0", fontSize: "15px" }}>
                {totalOfLinkedLocations} locais vinculados
              </p>
              <p style={{ color: 'red', fontSize: '.8rem', fontStyle: 'italic'}}>Máximo de {limitOfLocations}</p>
              </div>
            </div>
          </header>
          <article>
            <List
              sx={{
                width: "100%",
                maxWidth: 650,
                bgcolor: "background.paper",
              }}
            >
              {locationsData.map((location) => (
                <ListItem
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "auto auto 120px",
                    gap: "1rem",
                    padding: "0",
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

                  {handleButton(location.type, location.id)}
                </ListItem>
              ))}
            </List>
          </article>
        </section>

        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Vincular Locais</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Tem certeza que deseja vincular todos os locais deste perfil
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Não</Button>
            <Button onClick={handleConnectAllLocations} autoFocus>
              Sim
            </Button>
          </DialogActions>
        </Dialog>
        <TablePagination
          component="div"
          count={100}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
        <footer style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            variant="contained"
            sx={{ width: "250px" }}
            onClick={() => {
              navigate("/finish");
            }}
          >
            Ver Locais Vinculados
          </Button>
        </footer>
      </StyledPlatformWrapper>
      <Whatsapp />
    </div>
  );
}
