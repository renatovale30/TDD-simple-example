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
import { useState } from 'react';
import axios from 'axios';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [counter, setCounter] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchCounter = async () => {
    try {
      const count = await axios.get('https://myapi.com/getCount');
      setCounter(Number(count.data));
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  return {
    counter,
    loading,
    getCounter: fetchCounter,
  };
};
