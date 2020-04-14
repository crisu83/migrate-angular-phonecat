import { PhoneService, PhoneData } from '../core/phone/phone.service';

class PhoneDetailController {
  phone: PhoneData;
  mainImageUrl: string;

  constructor(private $routeParams: any, private phoneService: PhoneService) {
    this.phone = phoneService.getResource().get({ phoneId: $routeParams.phoneId }, (phone) => {
      this.setImage(phone.images[0]);
    });
  }

  setImage(imageUrl: string) {
    this.mainImageUrl = imageUrl;
  }
}

export const PhoneDetailComponent = {
  templateUrl: './phone-detail/phone-detail.template.html',
  controller: PhoneDetailController,
};
