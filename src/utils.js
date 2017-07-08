/* eslint-disable import/prefer-default-export*/
export function formatAddress(location = {}) {
  const address = [location.subLocalityName, location.street, location.house]
    .filter(item => !!item)
    .join(', ');

  if (location.postalCode) {
    const postalAddress = `${address} · ${location.postalCode}`;
    return postalAddress;
  }
  return address;
}

export function getImageUrl(id, size = 512) {
  if (id) {
    return `https://images.jqestate.ru/${id}-jqestate-${size}`;
  }
  return 'http://via.placeholder.com/512/?text=%D0%9D%D0%B5%D1%82+%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F';
}

// function declension of numerals
export function declenNum(titles) {
  const cases = [2, 0, 1, 1, 1, 2];
  return function curry(number) {
    return titles[
      number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]
    ];
  };
}

export function formatPrice(price = 0) {
  return Math.round(price / 1000000) / 10;
}
