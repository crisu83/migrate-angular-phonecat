import { module } from 'angular';
import 'angular-animate';
import 'angular-resource';
import 'angular-route';
import 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
import './app.css';

import config from './app.config';
import { CoreModule } from './core/core.module';
import { PhoneDetailModule } from './phone-detail/phone-detail.module';
import { PhoneListModule } from './phone-list/phone-list.module';

// Define the `phonecatApp` module
export const Ng1AppModule = module('phonecatApp', [
  'ngAnimate',
  'ngRoute',
  CoreModule.name,
  PhoneDetailModule.name,
  PhoneListModule.name,
]);

Ng1AppModule.config(config);
