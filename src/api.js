const baseUrl = 'https://api.jqestate.ru/v1/';

export default function get(requestUrl) {
  return fetch(baseUrl + requestUrl).then(response => response.json());
}
