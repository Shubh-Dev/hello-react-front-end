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
      <h2>Please Refresh to get a new Message</h2>
      <h1>
        Greeting Message:
        <span>{message}</span>
      </h1>
    </div>
  );
};

export default Greetings;
