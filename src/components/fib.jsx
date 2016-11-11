// @flow

import * as React from 'react';
import { range } from 'lodash';

export default function Fib({ count, onClickDec }:
                            { count: number,
                              onClickDec: Function }) {

  const classNameBtn = 'mdl-button mdl-js-button mdl-button--raised mdl-button--colored';

  function fib(n) {
    if (n < 2) return n;
    return fib(n - 1) + fib(n - 2);
  }

  return (
    <div>
      <p>FIB</p>
      <button
        className={classNameBtn}
        onClick={onClickDec}
      >DEC</button>

      {
        range(count + 1).map(val =>
          <span key={val} className="mdl-chip">
            <span className="mdl-chip__text">{fib(val)}</span>
          </span>
        )
      }
    </div>
  );
}