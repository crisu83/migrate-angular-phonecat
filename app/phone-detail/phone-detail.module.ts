import { module } from 'angular';
import { PhoneModule } from '../core/phone/phone.module';
import phoneDetailComponent from './phone-detail.component';

// Define the `phoneDetail` module
export const PhoneDetailModule = module('phoneDetail', ['ngRoute', PhoneModule.name]);

PhoneDetailModule.component('phoneDetail', phoneDetailComponent);
