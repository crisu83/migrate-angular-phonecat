import 'core-js/es7/reflect';
import 'zone.js/dist/zone';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Ng1AppModule } from './ng1.app';
import { Ng2AppModule } from './ng2.app';

import 'bootstrap/dist/css/bootstrap.css';

platformBrowserDynamic()
  .bootstrapModule(Ng2AppModule)
  .then((ref) => {
    (<any>ref.instance).upgrade.bootstrap(document.body, [Ng1AppModule.name]);
  });
