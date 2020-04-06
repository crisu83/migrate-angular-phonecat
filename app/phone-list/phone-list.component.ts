let phoneListComponent = {
  templateUrl: './phone-list/phone-list.template.html',
  controller: PhoneListController
}

function PhoneListController(Phone) {
  this.phones = Phone.query()
  this.orderProp = 'age'
}

export default phoneListComponent