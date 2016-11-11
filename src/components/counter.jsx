// @flow

import * as React from 'react';
import { range } from 'lodash';

export default function Counter({ count, onClickInc }:
                                { count: number,
                                  onClickInc: Function }) {

  const classNameBtn = 'mdl-button mdl-js-button mdl-button--raised mdl-button--colored';

  return (
    <div>
      <p>Counter</p>
      <button
        className={classNameBtn}
        onClick={onClickInc}
      >INC</button>

      {
        range(count + 1).map(val =>
          <span key={val} className="mdl-chip">
            <span className="mdl-chip__text">{val}</span>
          </span>
        )
      }
    </div>
  );
}