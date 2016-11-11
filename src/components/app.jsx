// @flow

import * as React from 'react';
import Counter from 'components/counter';
import Fib from 'components/fib';

export function App({ state, onIncrement, onDecrement }:
                    { state: {counter: number},
                      onIncrement: Function,
                      onDecrement: Function }) {
  return (
    <div>
      <Counter
        count={state.counter}
        onClickInc={onIncrement}
      />
      <Fib
        count={state.counter}
        onClickDec={onDecrement}
      />
    </div>
  );
}