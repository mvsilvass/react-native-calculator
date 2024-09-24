import { View, Text, StyleSheet } from 'react-native';
import { useContext } from 'react';

import { CalculatorContext } from './../../contexts/CalculatorContext';

export default function Display() {
  const { inputExpression } = useContext(CalculatorContext);

  return (
    <View style={styles.displayContainer}>
      <Text style={styles.displayText}>{inputExpression}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  displayContainer: {
    minHeight: '10%',
    width: '100%',
    padding: 10,
    backgroundColor: '#ECE4F5',
    justifyContent: 'center',
    borderWidth: 2.5,
    borderColor: '#6C48C5',
    borderRadius: 10,
  },
  displayText: {
    fontSize: 30,
  },
});
