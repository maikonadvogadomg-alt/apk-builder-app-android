import type { CapacitorConfig } from '@capacitor/cli';
const config: CapacitorConfig = {
  appId: 'com.meuapp.apk-builder-app',
  appName: 'APK Builder App',
  webDir: 'dist',
  server: { androidScheme: 'https' },
};
export default config;
