import { defineConfig } from 'cypress';
import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__dirname, {
      webServerCommands: {
        default: 'npx nx run crispr-cas9:serve',
        production: 'npx nx run crispr-cas9:start',
      },
    }),
    baseUrl: 'http://localhost:4200',
  },
});
