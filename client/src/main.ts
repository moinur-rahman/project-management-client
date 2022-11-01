import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { registerLicense } from '@syncfusion/ej2-base';
registerLicense(
  'ORg4AjUWIQA/Gnt2VVhjQlFaclhJXGFWf0x0RWFbb116dl1MYllBNQtUQF1hS39SdkRjWnxfcnBRQmNa'
);
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
