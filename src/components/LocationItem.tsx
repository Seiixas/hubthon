import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { add } from "ramda";
import { StyledDetails } from "./LocationItems.styles";

export const LocationItem = ({
  address,
  name,
  phone,
  website,
  scheduling,
  email,
}) => {
  return (
    <Accordion>
      <AccordionSummary>
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
}