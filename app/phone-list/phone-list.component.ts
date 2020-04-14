import { PhoneService, PhoneData } from '../core/phone/phone.service';

class PhoneListController {
  phones: PhoneData[];
  orderProp: string;

  constructor(private phoneService: PhoneService) {
    this.phones = phoneService.getResource().query();
    this.orderProp = 'age';
  }
}

export const PhoneListComponent = {
  templateUrl: './phone-list/phone-list.template.html',
  controller: PhoneListController,
};
