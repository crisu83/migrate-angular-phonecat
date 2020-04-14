import * as angular from 'angular';
import 'angular-animate';
import 'angular-resource';
import 'angular-route';
import 'jquery';
import './app.css';
import './app.animations.css';

import PhoneAnimationFactory from './app.animations';
import { CoreModule } from '../core/core.module';
import { PhoneDetailModule } from '../phone-detail/phone-detail.module';
import { PhoneListModule } from '../phone-list/phone-list.module';

// Define the `phonecatApp` module
export const Ng1AppModule = angular.module('phonecatApp', [
  'ngAnimate',
  'ngRoute',
  CoreModule.name,
  PhoneDetailModule.name,
  PhoneListModule.name,
]);

Ng1AppModule.config(($routeProvider) => {
  $routeProvider
    .when('/phones', {
      template: '<phone-list></phone-list>',
    })
    .when('/phones/:phoneId', {
      template: '<phone-detail></phone-detail>',
    })
    .otherwise('/phones');
});

Ng1AppModule.animation('.phone', PhoneAnimationFactory);
