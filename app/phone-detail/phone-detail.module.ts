import { module } from 'angular';
import { NgModule } from '@angular/core';
import { PhoneModule } from '../core/phone/phone.module';
import { phoneDetailComponent } from './phone-detail.component';

// Define the `phoneDetail` module
export const PhoneDetailModule = module('phoneDetail', ['ngRoute', PhoneModule.name]);

PhoneDetailModule.component('phoneDetail', phoneDetailComponent);

@NgModule({})
export class PhoneDetailNgModule {}
