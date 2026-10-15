import { getGreeting } from '../support/app.po';

describe('crispr-cas9', () => {
  beforeEach(() => cy.visit('/'));

  it('should display the page heading', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains('CRISPR-Cas9');
  });
});
