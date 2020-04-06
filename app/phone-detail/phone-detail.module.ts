import { module } from 'angular';
import phoneDetailComponent from './phone-detail.component';

// Define the `phoneDetail` module
module('phoneDetail', ['ngRoute', 'core.phone']).component('phoneDetail', phoneDetailComponent);
