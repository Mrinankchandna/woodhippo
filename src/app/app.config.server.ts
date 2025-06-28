import { ApplicationConfig } from '@angular/core';
import { appConfig } from './app.config';

// Simple server config without SSR dependencies
export const config: ApplicationConfig = {
  providers: [
    ...appConfig.providers || []
  ]
};