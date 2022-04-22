import React, { useEffect, useRef, useState } from "react";
import "./style.scss";
import BackspaceIcon from "@mui/icons-material/Backspace";
import { FastRewindTwoTone } from "@mui/icons-material";

function Calc() {
  const elements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const [eq, setValue] = useState(0);
  const [eqStack, seteqStack] = useState([]);
  const [result, setResult] = useState("");
  const counter = useRef(0);
  useEffect(() => {
    counter.current = counter.current + 1;
    console.log("Component Render count : " + counter.current);
  });
  const getAllOps = (...fns) => {
    return (opsStack) => {
      let tempStack = opsStack;
      fns.forEach((fn) => {
        tempStack = fn.call(null, tempStack);
      });
      return tempStack;
    };
  };
  const getPercentage = (opsStack) => {
    let newOpsStack = [];
    if (opsStack && opsStack.indexOf("%") < 0) return opsStack;
    for (const ele of opsStack) {
      if (ele == "%") {
        let temp = newOpsStack.pop();
        temp = (temp / 100).toFixed(2);
        newOpsStack.push(temp);
      } else {
        newOpsStack.push(ele);
      }
    }
    return newOpsStack;
  };
  const getDivide = (opsStack) => {
    if (opsStack && opsStack.indexOf("/") < 0) return opsStack;
    return genericOperation(opsStack, "/");
  };
  const getMultiply = (opsStack) => {
    if (opsStack && opsStack.indexOf("*") < 0) return opsStack;
    return genericOperation(opsStack, "*");
  };
  const getAddition = (opsStack) => {
    if (opsStack && opsStack.indexOf("+") < 0) return opsStack;
    return genericOperation(opsStack, "+");
  };
  const getSubtraction = (opsStack) => {
    if (opsStack && opsStack.indexOf("-") < 0) return opsStack;
    return genericOperation(opsStack, "-");
  };
  const genericOperation = (opsStack, operator) => {
    let newOpsStack = [];
    let nextOperand = null;
    for (const ele of opsStack) {
      if (ele == operator) {
        nextOperand = true;
      } else if (nextOperand) {
        let temp = newOpsStack.pop() - 0;
        switch (operator) {
          case "+":
            temp = (temp + (ele - 0)).toFixed(2);
            break;
          case "-":
            temp = (temp - (ele - 0)).toFixed(2);
            break;
          case "/":
            temp = (temp / (ele - 0)).toFixed(2);
            break;
          case "*":
            temp = (temp * (ele - 0)).toFixed(2);
            break;
        }
        newOpsStack.push(temp);
        nextOperand = false;
      } else if (!nextOperand) {
        newOpsStack.push(ele);
      }
    }
    return newOpsStack;
  };
  const calculateExpression = (e) => {
    e.stopPropagation();
    let expressionStack = [];
    let temp = "";
    for (let i of eq) {
      if (isNaN(i)) {
        if (temp) expressionStack.push(temp - 0);
        expressionStack.push(i);
        temp = "";
      } else {
        temp = temp + "" + i;
      }
    }
    if (temp) {
      expressionStack.push(temp - 0);
    }
    const calculateAll = getAllOps(getPercentage, getDivide, getMultiply, getAddition, getSubtraction);
    const result = calculateAll(expressionStack);
    setResult(result[0] - 0);
  };

  const numberClick = (e) => {
    console.log("Number clicked : ", e.target.id);
    if (validateNumber(e.target.id)) {
      setValue((preveq) => {
        const temp = `${preveq}${e.target.id}`;
        return temp;
      });
    } else if (validateSymbol(e.target.id)) {
      setValue((preveq) => {
        const temp = `${preveq}${e.target.id}`;
        return temp;
      });
    }
  };
  const resetValue = (e) => {
    console.log("reset value");
    setValue(() => 0);
    e.stopPropagation();
  };
  const clearInput = (e) => {
    e.stopPropagation();
    debugger;
    setValue((preveq) => preveq.slice(0, -1));
  };
  const validateNumber = (param) => {
    console.log("validating");
    if (isNaN(param)) return false;
    return true;
  };
  const validateSymbol = (param) => {
    if ("+-%*/=".indexOf(param) < -1) return false;
    return true;
  };
  const onValueUpdate = (e) => {
    if (validateNumber(e.target.value)) {
      setValue((preveq) => {
        const temp = `${preveq}${e.target.value}`;
        return temp;
      });
    } else if (validateSymbol(e.target.value)) {
      setValue((preveq) => {
        const temp = `${preveq}${e.target.value}`;
        return temp;
      });
    }
  };
  return (
    <div className="calc__container">
      <div className="calc__input">
        <input type="text" name="inputparam" id="inputparam" value={eq} onChange={onValueUpdate} />
        <input type="text" name="results" id="results" disabled value={result} />
      </div>

      <div className="calc__btn__container" onClick={numberClick}>
        {elements.map((element, index) => {
          return (
            <div className="element" id={element} key={Date.now() * index}>
              {element}
            </div>
          );
        })}
        <div className="element row-1 align__right" id="cls" onClick={clearInput}>
          <BackspaceIcon />
        </div>
        <div className="element align__right row-2" id="+">
          +
        </div>
        <div className="element align__right row-3" id="-">
          -
        </div>
        <div className="element align__right row-4" id="/">
          /
        </div>
        <div className="element " id="*">
          *
        </div>
        {/* <div className="element" id="%">
          %
        </div> */}

        <div className="element " id="ac" onClick={resetValue}>
          AC
        </div>
        <div className="element summary" id="=" onClick={calculateExpression}>
          =
        </div>
      </div>
    </div>
  );
}

export default Calc;
