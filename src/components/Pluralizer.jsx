import React from 'react';
import { declenNum } from '../utils';

type Props = {
  numeral: number,
  one: string,
  few: string,
  other: string,
};

export default ({ numeral, one, few, other }: Props) =>
  (<span>
    {declenNum([one, few, other], numeral)}
  </span>);
