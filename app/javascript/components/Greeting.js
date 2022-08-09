import React, { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { getGreeting } from "../redux/greeting"

const Greeting = () => {
  const greeting = useSelector((state) => state.greetings.greeting);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGreeting);
  }, [])

  return (
    <div className="greeting-container">
      <h1>{greeting}</h1>
    </div>
  )
}

export default Greeting
