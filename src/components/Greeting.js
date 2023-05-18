import React, { useEffect } from "react";
import { fetchGreetings } from "../store/greetingsSlice";
import { useDispatch, useSelector } from "react-redux";

function Greeting() {
  const dispatch = useDispatch();
  const greetingsData = useSelector((state) => state.greetings.greetings);
  const randomGreeting = greetingsData[Math.floor(Math.random() * greetingsData.length)];

  useEffect(() => dispatch(fetchGreetings()), [dispatch]);

  return (
    <div>
      {randomGreeting && <h3>{randomGreeting.greeting}</h3>}
      <button onClick={() => dispatch(fetchGreetings())}>
        Get Message
      </button>
    </div>
  )
}

export default Greeting;
