import { View, StyleSheet } from 'react-native';
import { useContext } from 'react';
import { CalculatorContext } from './../../../contexts/CalculatorContext';
import Button from '../Button';

export default function OperationButtons() {
  const { inputExpression, setInputExpression, operations } =
    useContext(CalculatorContext);

  const addOperation = (operation) => {
    const lastElement = inputExpression[inputExpression.length - 1];

    if (inputExpression.length !== 0) {
      if (inputExpression.length > 0) {
        if (operations.includes(lastElement)) {
          setInputExpression([...inputExpression.slice(0, -1), operation]);
        } else {
          setInputExpression([...inputExpression, operation]);
        }
      } else {
        setInputExpression([operation]);
      }
    }
  };

  return (
    <View style={styles.operationButtonsContainer}>
      {operations.map((operation) => (
        <Button key={operation} textValue={operation} onPress={() => addOperation(operation)} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  operationButtonsContainer: {
    flexWrap: 'wrap',
    flex: 1
  },
});
