import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({ projectId: "gdi-places-app-51820", appId: "1:70032463589:web:cf323f414e93a85664a60c", storageBucket: "gdi-places-app-51820.firebasestorage.app", apiKey: "AIzaSyAlQamxuLJc9OVmPCTQEOSuKpumbzuJ4FQ", authDomain: "gdi-places-app-51820.firebaseapp.com", messagingSenderId: "70032463589" })), provideFirestore(() => getFirestore())]
};
