import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({ projectId: "ring-of-fire-f763e", appId: "1:376615600261:web:dfd66fd9bcb6156bd429ec", storageBucket: "ring-of-fire-f763e.firebasestorage.app", apiKey: "AIzaSyD6QLdR4QCTyqrABpnamQWwsf5C3G5uXCA", authDomain: "ring-of-fire-f763e.firebaseapp.com", messagingSenderId: "376615600261" })), provideFirestore(() => getFirestore())]
};
