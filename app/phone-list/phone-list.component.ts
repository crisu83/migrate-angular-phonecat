export const phoneListComponent = {
  templateUrl: './phone-list/phone-list.template.html',
  controller: function (Phone) {
    this.phones = Phone.query();
    this.orderProp = 'age';
  },
};
