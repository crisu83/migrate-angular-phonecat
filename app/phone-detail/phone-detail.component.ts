import PhoneService from 'app/core/phone/phone.service';

export const phoneDetailComponent = {
  templateUrl: './phone-detail/phone-detail.template.html',
  controller: function ($routeParams: any, PhoneService: PhoneService) {
    let self = this;
    self.phone = PhoneService.getResource().get({ phoneId: $routeParams.phoneId }, function (phone) {
      self.setImage(phone.images[0]);
    });

    self.setImage = function setImage(imageUrl) {
      self.mainImageUrl = imageUrl;
    };
  },
};
