import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app';
import { config } from './app/app.config.server';

// This function is used to bootstrap the application on the server
export default function bootstrap() {
  return bootstrapApplication(AppComponent, config);
}