// @flow
/* eslint-disable import/prefer-default-export*/
import type { LocationType, RangeType } from './Complexes/types';

export function formatAddress(location: LocationType = {}) {
  const address = [location.subLocalityName, location.street, location.house]
    .filter(item => !!item)
    .join(', ');

  if (location.postalCode) {
    const postalAddress = `${address} · ${location.postalCode}`;
    return postalAddress;
  }
  return address;
}

export function getImageUrl(id: number, size: number = 512) {
  if (id) {
    return `https://s3-eu-central-1.amazonaws.com/yard-images/${id}-${size}`;
  }
  return 'http://via.placeholder.com/512/?text=%D0%9D%D0%B5%D1%82+%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F';
}

// function declension of numerals
export function declenNum(declensions: Array<string>, numeral: number = 0): string {
  const cases = [2, 0, 1, 1, 1, 2];
  return `${declensions[
    numeral % 100 > 4 && numeral % 100 < 20 ? 2 : cases[numeral % 10 < 5 ? numeral % 10 : 5]
  ]}`;
}

export function formatPrice(price: number = 0) {
  return Math.round(price / 1000000) / 10;
}

// Displays only one value from range if they're nearly equal
export function processRange(range: RangeType, round: number = 0, units: string = '') {
  const { to, from } = range || 0;

  if (to.toFixed(round) === from.toFixed(round)) {
    return `${to.toFixed(round)} ${units}`;
  }
  return `от ${from.toFixed(round)} до ${to.toFixed(round)} ${units}`;
}
