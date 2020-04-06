import { module } from 'angular';
import phoneListComponent from './phone-list.component';

// Define the `phoneList` module
module('phoneList', ['core.phone']).component('phoneList', phoneListComponent);
