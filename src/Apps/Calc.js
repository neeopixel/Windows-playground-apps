import "../Calc.css";
import Draggable from "react-draggable";
import { useState } from "react";

function Calc() {
  const [calculation, setCalculation] = useState("");
  const [CalcDisplay, setOutput] = useState("");
  const actions = ["/", "*", "+", "-", "."];

  const updateCalculation = (value) => {
    if (
      actions.includes(value) & (calculation === "") ||
      actions.includes(value) & actions.includes(calculation.slice(-1))
    ) {
      return;
    }
    setCalculation(calculation + value);

    if (!actions.includes(value)){
      setOutput(eval(calculation+value).toString())
  }
  };


  const createDigits = () => {
    const digits = [];

    for (let i = 1; i < 10; i++) {
      digits.push(
        <button onClick={() => updateCalculation(i.toString())}>
          {i}
        </button>
      );
    }
    return digits;
  };


/* eslint no-eval: 0 */
  const calculate = () => {
    setCalculation (eval(calculation).toString());
  };



  const clear = () => {
    if (calculation === "") {
      return;
    }
    const value = calculation.slice(0, -1);
    setCalculation(value);
  };


  

  return (
    <div className="Calculator">
      <header className="app-header">
        <Draggable bounds="parent">
          <div className="calc">
            {/* Starting Calc Program */}

            <div className="CalcDisplay">
              {calculation || ""}
              {CalcDisplay ? <span className="preRes">{CalcDisplay}</span> :""}
            </div>

            <div className="Memory">
              <div class="Rectangle_40">
                <button>MC</button>
              </div>
              <div class="Rectangle_41">
                <button>MR</button>
              </div>
              <div class="Rectangle_42">
                <button>M</button>
              </div>
              <div class="Rectangle_43">
                <button onClick={clear}>
                  <img
                    width="20"
                    height="20"
                    src="https://cdn-icons-png.flaticon.com/512/159/159805.png"
                    alt=""
                  ></img>
                </button>
              </div>
            </div>

            <div class="Numbers">
              {createDigits()}

              
              <button
                onClick={() => {
                  updateCalculation("-");
                }}
              >
                -
              </button>
             
              <button
                onClick={() => {
                  updateCalculation("/");
                }}
              >
                /
              </button>
             
              <button
                onClick={() => {
                  updateCalculation("*");
                }}
              >
                *
              </button>

              <button
                onClick={() => {
                  updateCalculation("0");
                }}
              >
                0
              </button>

              <button
                onClick={() => {
                  updateCalculation("+");
                }}
              >
                +
              </button>

              <button
                onClick={() => {
                  updateCalculation(".");
                }}
              >
                .
              </button>

              <button 
                onClick={calculate}
                >
                =
              </button>

            </div>

            <div className="Movebutton">
              <img
                width="20"
                height="20"
                src="https://cdn-icons-png.flaticon.com/128/2838/2838713.png"
                alt=""
              ></img>
              <span>CALCULATOR</span>
            </div>
          </div>
        </Draggable>
      </header>
    </div>
  );
}

export default Calc;
