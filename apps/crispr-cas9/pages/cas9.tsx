import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Cas9Accordion = (): JSX.Element => {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Cas9</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            a CRISPR-associated (Cas) endonuclease, or enzyme, that acts as “molecular scissors” to cut DNA at a location specified by a guide RNA
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default Cas9Accordion;
