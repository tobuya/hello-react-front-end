import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreetings } from '../store/greetingsSlice';

function Greeting() {
  const dispatch = useDispatch();
  const greetingsData = useSelector((state) => state.greetings.greetings);
  const randomGreeting = greetingsData[Math.floor(Math.random() * greetingsData.length)];

  useEffect(() => dispatch(fetchGreetings()), [dispatch]);

  return (
    <div>
      {randomGreeting && <h3>{randomGreeting.greeting}</h3>}
      <button type="button" onClick={() => dispatch(fetchGreetings())}>
        Get Message
      </button>
    </div>
  );
}

export default Greeting;
