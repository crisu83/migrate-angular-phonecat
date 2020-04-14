import { PhoneService, PhoneData } from '../core/phone/phone.service';

class PhoneDetailController {
  phone: PhoneData;
  mainImageUrl: string;

  constructor(private $routeParams: angular.route.IRouteParamsService, private phoneService: PhoneService) {
    phoneService.get($routeParams.phoneId).subscribe((phone) => {
      this.phone = phone;
      this.setImage(phone.images[0]);
    });
  }

  setImage(imageUrl: string) {
    this.mainImageUrl = imageUrl;
  }
}

export const PhoneDetailComponent = {
  template: `
  <div class="phone-images">
    <img ng-src="{{img}}" class="phone"
        ng-class="{selected: img === $ctrl.mainImageUrl}"
        ng-repeat="img in $ctrl.phone.images" />
  </div>

  <h1>{{$ctrl.phone.name}}</h1>

  <p>{{$ctrl.phone.description}}</p>

  <ul class="phone-thumbs">
    <li ng-repeat="img in $ctrl.phone.images">
      <img ng-src="{{img}}" ng-click="$ctrl.setImage(img)" />
    </li>
  </ul>

  <ul class="specs">
    <li>
      <span>Availability and Networks</span>
      <dl>
        <dt>Availability</dt>
        <dd ng-repeat="availability in $ctrl.phone.availability">{{availability}}</dd>
      </dl>
    </li>
    <li>
      <span>Battery</span>
      <dl>
        <dt>Type</dt>
        <dd>{{$ctrl.phone.battery.type}}</dd>
        <dt>Talk Time</dt>
        <dd>{{$ctrl.phone.battery.talkTime}}</dd>
        <dt>Standby time (max)</dt>
        <dd>{{$ctrl.phone.battery.standbyTime}}</dd>
      </dl>
    </li>
    <li>
      <span>Storage and Memory</span>
      <dl>
        <dt>RAM</dt>
        <dd>{{$ctrl.phone.storage.ram}}</dd>
        <dt>Internal Storage</dt>
        <dd>{{$ctrl.phone.storage.flash}}</dd>
      </dl>
    </li>
    <li>
      <span>Connectivity</span>
      <dl>
        <dt>Network Support</dt>
        <dd>{{$ctrl.phone.connectivity.cell}}</dd>
        <dt>WiFi</dt>
        <dd>{{$ctrl.phone.connectivity.wifi}}</dd>
        <dt>Bluetooth</dt>
        <dd>{{$ctrl.phone.connectivity.bluetooth}}</dd>
        <dt>Infrared</dt>
        <dd>{{$ctrl.phone.connectivity.infrared | checkmark}}</dd>
        <dt>GPS</dt>
        <dd>{{$ctrl.phone.connectivity.gps | checkmark}}</dd>
      </dl>
    </li>
    <li>
      <span>Android</span>
      <dl>
        <dt>OS Version</dt>
        <dd>{{$ctrl.phone.android.os}}</dd>
        <dt>UI</dt>
        <dd>{{$ctrl.phone.android.ui}}</dd>
      </dl>
    </li>
    <li>
      <span>Size and Weight</span>
      <dl>
        <dt>Dimensions</dt>
        <dd ng-repeat="dim in $ctrl.phone.sizeAndWeight.dimensions">{{dim}}</dd>
        <dt>Weight</dt>
        <dd>{{$ctrl.phone.sizeAndWeight.weight}}</dd>
      </dl>
    </li>
    <li>
      <span>Display</span>
      <dl>
        <dt>Screen size</dt>
        <dd>{{$ctrl.phone.display.screenSize}}</dd>
        <dt>Screen resolution</dt>
        <dd>{{$ctrl.phone.display.screenResolution}}</dd>
        <dt>Touch screen</dt>
        <dd>{{$ctrl.phone.display.touchScreen | checkmark}}</dd>
      </dl>
    </li>
    <li>
      <span>Hardware</span>
      <dl>
        <dt>CPU</dt>
        <dd>{{$ctrl.phone.hardware.cpu}}</dd>
        <dt>USB</dt>
        <dd>{{$ctrl.phone.hardware.usb}}</dd>
        <dt>Audio / headphone jack</dt>
        <dd>{{$ctrl.phone.hardware.audioJack}}</dd>
        <dt>FM Radio</dt>
        <dd>{{$ctrl.phone.hardware.fmRadio | checkmark}}</dd>
        <dt>Accelerometer</dt>
        <dd>{{$ctrl.phone.hardware.accelerometer | checkmark}}</dd>
      </dl>
    </li>
    <li>
      <span>Camera</span>
      <dl>
        <dt>Primary</dt>
        <dd>{{$ctrl.phone.camera.primary}}</dd>
        <dt>Features</dt>
        <dd>{{$ctrl.phone.camera.features.join(', ')}}</dd>
      </dl>
    </li>
    <li>
      <span>Additional Features</span>
      <dd>{{$ctrl.phone.additionalFeatures}}</dd>
    </li>
  </ul>
  `,
  controller: PhoneDetailController,
};
