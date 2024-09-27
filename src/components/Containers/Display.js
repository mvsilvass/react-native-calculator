import { View, Text, StyleSheet } from 'react-native';
import { useContext } from 'react';

import metrics from '@utils/Metrics';
import { CalculatorContext } from '@contexts/CalculatorContext';

export default function Display() {
  const { inputExpression } = useContext(CalculatorContext);

  return (
    <View style={styles.displayContainer}>
      <Text 
        style={styles.displayText} 
        numberOfLines={2} 
        adjustsFontSizeToFit
        minimumFontScale={0.4} 
      >{inputExpression}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  displayContainer: {
    minHeight: metrics.screenHeight * 0.115,
    width: '100%',
    padding: 10,
    backgroundColor: '#ECE4F5',
    justifyContent: 'center',
    borderWidth: metrics.screenWidth * 0.0055,
    borderColor: '#6C48C5',
    borderRadius: 10,
  },
  displayText: {
    fontSize: metrics.screenWidth * 0.1,
  },
});
