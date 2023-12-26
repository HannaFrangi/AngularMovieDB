import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'modern.app',
  appName: 'DaMovieDB',
  webDir: 'www/browser',
  server: {
    androidScheme: 'https'
  }
};

export default config;
