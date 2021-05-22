import React from 'react';

import { getDNAStrands } from '../../lib/getSequence';

const DiagnosticTools = () => {
  // compute sequence
  console.log(getDNAStrands());
  return (
    <section>diagnostics are complete</section>
  );
}

export default DiagnosticTools;
