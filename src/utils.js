/* eslint-disable import/prefer-default-export*/
export function formatAddress(location = {}) {
  let address = [location.subLocalityName, location.street, location.house]
    .filter(item => !!item)
    .join(', ');

  if (location.postalCode) address = `${address} · ${location.postalCode}`;
  return address;
}

export function getImageUrl(id = 'undefined', size = 512) {
  if (id !== 'none') {
    return `https://images.jqestate.ru/${id}-jqestate-${size}`;
  }
  return 'http://via.placeholder.com/512/?text=%D0%9D%D0%B5%D1%82+%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F';
}

export function countImages(images = []) {
  const numberLength = images.length;
  // console.log(`numberLength: ${numberLength}`);
  const numberString = numberLength.toString();
  // console.log(`numberString: ${numberString}`);
  let lastchar = '';
  // console.log(numberString);
  if (numberLength > 9) {
    lastchar = numberString.slice(-1);
    // console.log(`lastchar >1 and: ${lastchar}`);
  } else {
    lastchar = numberString;
    // console.log(`lastchar else and: ${lastchar}`);
  }
  if (images.length === 0) {
    return 'Нет фотографий';
  }
  switch (lastchar) {
    case '1':
      return `${numberLength} фотография`;

    case '2':
    case '3':
    case '4':
      return `${numberString} фотографии`;

    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
    case '0':
      return `${numberLength} фотографий`;

    default:
      return 'Default';
  }
}

export function formatPrice(price = 0) {
  return Math.round(price / 1000000) / 10;
}
