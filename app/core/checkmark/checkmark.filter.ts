import { module } from 'angular';

module('core').filter('checkmark', function () {
  return function (input) {
    return input ? '\u2713' : '\u2718';
  };
});
