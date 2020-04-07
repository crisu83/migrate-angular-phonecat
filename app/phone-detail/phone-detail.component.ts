export const phoneDetailComponent = {
  templateUrl: './phone-detail/phone-detail.template.html',
  controller: function ($routeParams, Phone) {
    var self = this;
    self.phone = Phone.get({ phoneId: $routeParams.phoneId }, function (phone) {
      self.setImage(phone.images[0]);
    });

    self.setImage = function setImage(imageUrl) {
      self.mainImageUrl = imageUrl;
    };
  },
};
