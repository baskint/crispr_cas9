import styled from 'styled-components';
import {
  Accordion,
  AccordionSummary,
  // AccordionDetails,
  Typography,
} from '@mui/material';
import { ExpandCircleDownOutlined } from '@mui/icons-material';

const StyledAccordion = styled(Accordion)`
  &:last-of-type,
  &:first-of-type {
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
  }
  &.MuiPaper-root {
    background-color: hsla(214, 62%, 21%, 1);
    color: white;
    border-radius: 16px !important;
  }
  &.MuiAccordion-root {
    border-radius: 16px !important;
  }
`;

const StyledAccordionSummary = styled(AccordionSummary)`
  border-radius: 16px;
`;

const StyledHeader = styled(Typography)`
  &.MuiTypography-root {
    text-align: center;
    width: 100%;
  }
`;

const StyledExpandIcon = styled(ExpandCircleDownOutlined)`
  color: white;
  width: 32px;
  height: 32px;
`;

export {
  StyledAccordion,
  StyledAccordionSummary,
  StyledHeader,
  StyledExpandIcon,
};
