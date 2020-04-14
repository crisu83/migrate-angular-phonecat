import 'angular-mocks';
import * as angular from 'angular';
import { PhoneDetailModule } from './phone-detail.module';

describe('phoneDetail', function () {
  // Load the module that contains the `phoneDetail` component before each test
  beforeEach(angular.mock.module(PhoneDetailModule.name));

  // Test the controller
  describe('PhoneDetailController', function () {
    var $httpBackend, ctrl;
    var xyzPhoneData = {
      name: 'phone xyz',
      images: ['image/url1.png', 'image/url2.png'],
    };

    beforeEach(
      angular.mock.inject(function ($componentController, _$httpBackend_, $routeParams) {
        $httpBackend = _$httpBackend_;
        $httpBackend.expectGET('phones/xyz.json').respond(xyzPhoneData);

        $routeParams.phoneId = 'xyz';

        ctrl = $componentController('phoneDetail');
      })
    );

    it('should fetch the phone details', function () {
      jasmine.addCustomEqualityTester(angular.equals);

      expect(ctrl.phone).toEqual({});

      $httpBackend.flush();
      expect(ctrl.phone).toEqual(xyzPhoneData);
    });
  });
});
