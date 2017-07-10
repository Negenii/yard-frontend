const baseUrl = 'https://yard.moscow/api/v1/';

export default function get(requestUrl) {
  return fetch(encodeURI(baseUrl + requestUrl)).then(response => response.json());
}
