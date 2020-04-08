export interface PhoneData {
  name: string;
  images?: string[];
}

export default class PhoneService {
  constructor(private $resource: any) {}

  getResource() {
    return this.$resource(
      'phones/:phoneId.json',
      {},
      {
        query: {
          method: 'GET',
          params: { phoneId: 'phones' },
          isArray: true,
        },
      }
    );
  }
}
