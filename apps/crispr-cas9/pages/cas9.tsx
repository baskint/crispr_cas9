import React from 'react';

import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  StyledAccordion,
  StyledHeader,
} from '../components/cas9elements';

const Cas9Accordion = (): JSX.Element => {
  return (
    <div>
      <StyledAccordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="cas9-content"
          id="cas9-header"
        >
          <StyledHeader>Cas9</StyledHeader>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            a CRISPR-associated (Cas) endonuclease, or enzyme, that acts as “molecular scissors” to cut DNA at a location specified by a guide RNA
          </Typography>
        </AccordionDetails>
      </StyledAccordion>
    </div>
  );
}

export default Cas9Accordion;
