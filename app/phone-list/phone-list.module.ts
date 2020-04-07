import { module } from 'angular';
import { NgModule } from '@angular/core';
import { PhoneModule } from '../core/phone/phone.module';
// import { downgradeComponent } from '@angular/upgrade/static';
import { phoneListComponent } from './phone-list.component';

// Define the `phoneList` module
export const PhoneListModule = module('phoneList', [PhoneModule.name]);

PhoneListModule.component('phoneList', phoneListComponent);
// PhoneListModule.directive('phoneList', downgradeComponent({ component: PhoneListComponent }));

@NgModule({})
export class PhoneListNgModule {}
