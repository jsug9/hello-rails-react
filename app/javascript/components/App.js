import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HelloWorld from "./HelloWorld";
import Hello from "./Hello";

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hello />} />
          <Route path='/hello' render = {() => <HelloWorld greeting="Friend" />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App
