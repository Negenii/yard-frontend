const baseUrl = 'https://yard.moscow/api/v1/';

export default function get(requestUrl) {
  return fetch(baseUrl + requestUrl).then(response => response.json());
}
