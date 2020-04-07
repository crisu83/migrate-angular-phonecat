import { module } from 'angular';
import { PhoneModule } from '../core/phone/phone.module';
import phoneListComponent from './phone-list.component';

// Define the `phoneList` module
export const PhoneListModule = module('phoneList', [PhoneModule.name]);

PhoneListModule.component('phoneList', phoneListComponent);
