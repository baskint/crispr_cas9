import styled from 'styled-components';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';

const StyledAccordion = styled(Accordion)`
  background-color: hsla(214, 62%, 21%, 1);
  color: white;
`

const StyledHeader = styled(Typography)`
 font-weight: 500;
  font-size: 1.25rem;
  letter-spacing: -0.025em;
  line-height: 1.75rem;
  padding-left: 1rem;
  padding-right: 1rem;
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default null;

export {
  StyledAccordion,
  StyledHeader
};
