import * as angular from 'angular';
import PhoneModule from '../core/phone/phone.module';
import PhoneDetailComponent from './phone-detail.component';

// Define the `phoneDetail` module
const PhoneDetailModule = angular.module('phoneDetail', ['ngRoute', PhoneModule.name]);

PhoneDetailModule.component('phoneDetail', PhoneDetailComponent);

export default PhoneDetailModule;
