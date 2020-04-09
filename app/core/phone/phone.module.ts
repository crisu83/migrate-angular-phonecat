import * as angular from 'angular';
import PhoneService from './phone.service';

// Define the `core.phone` module
const PhoneModule = angular.module('core.phone', ['ngResource']);

PhoneModule.factory('phoneService', PhoneService);

export default PhoneModule;
