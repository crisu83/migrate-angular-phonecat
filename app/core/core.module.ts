import { module } from 'angular';
import CheckmarkFilter from './checkmark/checkmark.filter';
import { PhoneModule } from './phone/phone.module';
import PhoneService from './phone/phone.service';

// Define the `core` module
export const CoreModule = module('core', [PhoneModule.name]);

CoreModule.filter('checkmark', CheckmarkFilter);
CoreModule.factory('Phone', PhoneService);
