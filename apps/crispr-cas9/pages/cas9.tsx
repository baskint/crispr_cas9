import React from 'react';

import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

import {
  StyledAccordion,
  StyledAccordionSummary,
  StyledExpandIcon,
  StyledHeader,
} from '../components/cas9elements';

const Cas9Accordion = (): JSX.Element => {
  return (
      <StyledAccordion>
        <StyledAccordionSummary
        expandIcon={<StyledExpandIcon />}
          aria-controls="cas9-content"
          id="cas9-header"
        >
          <StyledHeader variant="h4">Cas9</StyledHeader>
        </StyledAccordionSummary>
        <AccordionDetails>
          <Typography>
            A CRISPR-associated (Cas) endonuclease, or enzyme, that acts as “molecular scissors” to cut DNA at a location specified by a guide RNA
          </Typography>
        </AccordionDetails>
      </StyledAccordion>
  );
}

export default Cas9Accordion;
