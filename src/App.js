/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useReducer } from "react";

import "./App.css";

import TotalDisplay from "./components/TotalDisplay";
import CalcButton from "./components/CalcButton";
import reducer, { initialState } from "./reducers/index";

// import { addOne, applyNumber } from "./actions";
import { applyNumber } from "./actions";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // const handle1Click = () => {
  //   dispatch(addOne());
  // };

  const handleNumClick = (e) => {
    // e.target.value will not work here
    const { innerText } = e.target;
    dispatch(applyNumber(innerText));
  };

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          <img width="40px" src="./Lambda-Logo-Red.png" /> Lambda Reducer
          Challenge
        </a>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>

            <div className="row">
              <CalcButton value={"M+"} />
              <CalcButton value={"MR"} />
              <CalcButton value={"MC"} />
            </div>

            <div className="row">
              {/* <CalcButton onClick={handle1Click} value={1} /> */}
              <CalcButton onClick={handleNumClick} value={1} />
              <CalcButton onClick={handleNumClick} value={2} />
              <CalcButton onClick={handleNumClick} value={3} />
            </div>

            <div className="row">
              <CalcButton onClick={handleNumClick} value={4} />
              <CalcButton onClick={handleNumClick} value={5} />
              <CalcButton onClick={handleNumClick} value={6} />
            </div>

            <div className="row">
              <CalcButton onClick={handleNumClick} value={7} />
              <CalcButton onClick={handleNumClick} value={8} />
              <CalcButton onClick={handleNumClick} value={9} />
            </div>

            <div className="row">
              <CalcButton onClick={handleNumClick} value={"+"} />
              <CalcButton onClick={handleNumClick} value={"*"} />
              <CalcButton onClick={handleNumClick} value={"-"} />
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
