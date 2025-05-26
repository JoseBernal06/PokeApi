import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';

import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

// Firebase imports

import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { environment } from './environments/environment'; // Asegúrate de tener esto
import { provideIonicAngular } from '@ionic/angular/standalone';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideIonicAngular(),
    provideHttpClient(),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
  ],
}).catch((err) => console.error(err));
