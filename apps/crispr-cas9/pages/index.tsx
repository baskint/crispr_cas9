import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Cas9Accordion from './cas9';

// import Task from '../components/Task.component';

const StyledPage = styled.div`
  .page {
  }
`;

export function Index() {
  const currentYear =/\d{4}/.exec(Date())[0];

  return (
    <StyledPage>
      <div className="wrapper">
        <div className="container">
          <div id="intro">
            <h1>
            🧬 CRISPR-Cas9 🧬
            </h1>
          </div>
          <div id="hero" className="rounded">
            <div className="text-container">
            CRISPR-Cas9 is a powerful tool for editing genomes, meaning it allows researchers to easily alter DNA sequences and modify gene function. It has many potential applications, including correcting genetic defects, treating and preventing the spread of diseases, and improving the growth and resilience of crops.
            </div>
            <div className="logo-container">
              <Image height={300} width={450}
                src="/static/images/dna_structure.jpg"
                 alt="DNA structure"
              />
            </div>
          </div>

          <div id="middle-content">
            <div id="crispr-definition" className="rounded shadow">
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Typography variant="h4">CRISPR</Typography>
              </Box>
              <Box sx={{ p: 2 }}>
                The term "CRISPR" stands for "clusters of regularly interspaced short palindromic repeats" and describes a region of DNA made up of short, repeated sequences with so-called "spacers" sandwiched between each repeat.
              </Box>
            </div>
            <div className="rounded shadow">
              <Cas9Accordion />
            </div>
          </div>
          <div id="bottom-content"
            className="rounded shadow"
            style={{ overflow: 'hidden', padding: '10px 25px'}}
          >
            <Image 
              src="/static/images/how_it_works.jpg" 
              alt="how it works"
              objectFit="contain"
              loading="lazy"
              width={500}
              height={750}
            />
          </div>

          <Box id="tapkan-consulting"
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{ mt: 2}}
          >
            <span className="copyleft">&copy;</span> {currentYear} -
        <a className="text-amber" href="https://baskintapkan.com/">Tapkan Consulting</a>

          </Box>
        </div>
      </div>
    </StyledPage>
  );
}

export default Index;
