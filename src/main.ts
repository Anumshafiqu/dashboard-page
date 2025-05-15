// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';
// import { provideAnimations } from '@angular/platform-browser/animations';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));
//   providers: [
//     provideAnimations(),
//   ]



// bootstrapApplication(AppComponent, {
//   providers: [
//     provideAnimations(), 
//   ]
// })
//   .catch((err) => console.error(err));




import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { provideAnimations } from '@angular/platform-browser/animations';

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []),  // keep existing providers from appConfig
    provideAnimations()              // ✅ add animations provider correctly
  ]
}).catch(err => console.error(err));
