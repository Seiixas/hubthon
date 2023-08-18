import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { add } from "ramda";
import { StyledDetails } from "./LocationItems.styles";

export const LocationItem = ({
  address,
  name,
  phone,
  website,
  email,
  setLatLngSelected,
  latLng,
}: any) => {
  return (
    <Accordion>
      <AccordionSummary onClick={() => setLatLngSelected(latLng)}>
        <p>{name}</p>
        <p>{address}</p>
      </AccordionSummary>
      <AccordionDetails>
        <StyledDetails>
          <p>{phone}</p>
          <p>{website}</p>
          <p>{email}</p>
        </StyledDetails>
      </AccordionDetails>
    </Accordion>
  );
};
