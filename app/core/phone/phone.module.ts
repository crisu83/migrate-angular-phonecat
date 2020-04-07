import { module } from 'angular';
import { NgModule } from '@angular/core';
import PhoneService from './phone.service';

// Define the `core.phone` module
export const PhoneModule = module('core.phone', ['ngResource']);

PhoneModule.factory('Phone', PhoneService);

@NgModule({})
export class PhoneNgModule {}
