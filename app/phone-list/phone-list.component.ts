// import { Inject, Component, ElementRef, Injector } from '@angular/core';
// import PhoneService from '../core/phone/phone.service';
// import { UpgradeComponent } from '@angular/upgrade/static';

import PhoneService from 'app/core/phone/phone.service';

export const phoneListComponent = {
  templateUrl: './phone-list/phone-list.template.html',
  controller: function (PhoneService: PhoneService) {
    this.phones = PhoneService.getResource().query();
    this.orderProp = 'age';
  },
};

// @Component({
//   selector: 'phone-list',
//   templateUrl: './phone-list/phone-list.template.html',
// })
// export default class PhoneListComponent extends UpgradeComponent {
//   phones: any;
//   orderProp: string;

//   constructor(elementRef: ElementRef<any>, injector: Injector, @Inject(PhoneService) phoneService: any) {
//     super('phoneList', elementRef, injector);
//     this.phones = phoneService.query();
//     this.orderProp = 'age';
//   }
// }
