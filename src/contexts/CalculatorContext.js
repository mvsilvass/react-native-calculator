import { createContext, useState, useMemo } from 'react';
import PropTypes from 'prop-types';

export const CalculatorContext = createContext();

export const CalculatorProvider = ({ children }) => {
  const [inputExpression, setInputExpression] = useState([]);
  const operations = ['+', '-', '*', '/'];

  function findOperation(inputExpression) {
    let firstOperationIndex = -1;

    for (let i = 0; i < inputExpression.length; i++) {
      const currentItem = inputExpression[i];

      if (operations.includes(currentItem)) {
        if (firstOperationIndex === -1) {
          firstOperationIndex = i;
        }

        if (currentItem === '*' || currentItem === '/') {
          return i;
        }
      }
    }

    return firstOperationIndex;
  }

  const calculate = () => {
    let currentInputExpression = [...inputExpression];

    while (currentInputExpression.length >= 3) {
      const operationIndex = findOperation(currentInputExpression);

      if (operationIndex === -1) break;

      const currentOperation = currentInputExpression[operationIndex];
      const firstNumber = parseFloat(
        currentInputExpression[operationIndex - 1]
      );
      const secondNumber = parseFloat(
        currentInputExpression[operationIndex + 1]
      );

      let calculationResult;
      switch (currentOperation) {
        case '+':
          calculationResult = firstNumber + secondNumber;
          break;
        case '-':
          calculationResult = firstNumber - secondNumber;
          break;
        case '*':
          calculationResult = firstNumber * secondNumber;
          break;
        case '/':
          calculationResult = firstNumber / secondNumber;
          break;
        default:
          return null;
      }

      calculationResult = parseFloat(calculationResult.toFixed(5));
      currentInputExpression.splice(operationIndex - 1, 3, calculationResult);
    }

    return currentInputExpression[0];
  };

  const value = useMemo(() => ({
    inputExpression,
    setInputExpression,
    operations,
    calculate,
  }), [inputExpression]);

  return (
    <CalculatorContext.Provider
    value={value}>
      {children}
    </CalculatorContext.Provider>
  );
};

CalculatorProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };