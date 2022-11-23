import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreetingsApi } from '../redux/greetings/greetings';

const Greetings = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGreetingsApi());
  }, [dispatch]);

  const message = useSelector((state) => state.greetingsReducer);

  return (
    <div>
      <h2> Refresh to get random greetings</h2>
      <h2>
        Greeting Message:
        <span>{message}</span>
      </h2>
    </div>
  );
};

export default Greetings;
