/*
 * Talkdesk Confidential
 *
 * Copyright (C) Talkdesk Inc. 2021
 *
 * The source code for this program is not published or otherwise divested
 * of its trade secrets, irrespective of what has been deposited with the
 * U.S. Copyright Office. Unauthorized copying of this file, via any medium
 * is strictly prohibited.
 */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import useCounter from './hooks/useCounter';

const Counter = () => {
  const [count, setCount] = useState<number>(0);
  const { counter, loading, getCounter } = useCounter();

  useEffect(() => {
    getCounter();
  }, []);

  useEffect(() => {
    setCount(counter);
  }, [counter]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <button type="button" data-testid="buttonQa" onClick={() => setCount(count + 1)}>
        Button
      </button>
      <div data-testid="counter">Count is: {count}</div>
    </>
  );
};

export default Counter;
