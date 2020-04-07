import 'angular-mocks';
import { mock, equals } from 'angular';
import { PhoneModule } from '../phone/phone.module';

describe('Phone', function () {
  let $httpBackend;
  let PhoneService;
  let phonesData = [{ name: 'Phone X' }, { name: 'Phone Y' }, { name: 'Phone Z' }];

  // Add a custom equality tester before each test
  beforeEach(function () {
    jasmine.addCustomEqualityTester(equals);
  });

  // Load the module that contains the `Phone` service before each test
  beforeEach(mock.module(PhoneModule.name));

  // Instantiate the service and "train" `$httpBackend` before each test
  beforeEach(
    mock.inject(function (_$httpBackend_, _PhoneService_) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('phones/phones.json').respond(phonesData);

      PhoneService = _PhoneService_;
    })
  );

  // Verify that there are no outstanding expectations or requests after each test
  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should fetch the phones data from `/phones/phones.json`', function () {
    let phones = PhoneService.getResource().query();

    expect(phones).toEqual([]);

    $httpBackend.flush();
    expect(phones).toEqual(phonesData);
  });
});
