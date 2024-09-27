import { View, StyleSheet } from 'react-native';
import { useContext } from 'react';
import { CalculatorContext } from '@contexts/CalculatorContext';
import Button from '../Button';

export default function NumericButtons() {
  const { inputExpression, setInputExpression, operations } =
    useContext(CalculatorContext);

  const addNumber = (number) => {
    if (
      inputExpression.length > 0 &&
      !operations.includes(inputExpression[inputExpression.length - 1])
    ) {
      const lastNumber = inputExpression.pop();
      setInputExpression([...inputExpression, lastNumber + number]);
    } else {
      setInputExpression([...inputExpression, number]);
    }
  };

  const numbers = [];
  for (let i = 1; i <= 9; i++) {
    numbers.push(i);
  }

  numbers.push(0);

  return (
    <View style={styles.numericButtonsContainer}>
      {numbers.map((number) => (
        <Button
            key={number}
            textValue={number.toString()}
            onPress={() => addNumber(number.toString())}
            style={{alignSelf: "stretch"}}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  numericButtonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1
  },
});
