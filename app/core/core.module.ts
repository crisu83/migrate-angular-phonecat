import * as angular from 'angular';
import CheckmarkFilter from './checkmark/checkmark.filter';
import PhoneModule from './phone/phone.module';

// Define the `core` module
const CoreModule = angular.module('core', [PhoneModule.name]);

CoreModule.filter('checkmark', CheckmarkFilter);

export default CoreModule;
