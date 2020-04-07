export default function PhoneService($resource) {
  return $resource(
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
