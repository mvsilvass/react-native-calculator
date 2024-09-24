import { SafeAreaView, StyleSheet, View } from 'react-native';
import { CalculatorProvider } from './src/contexts/CalculatorContext';

import Display from './src/components/Containers/Display';

export default function App() {
  return (
    <CalculatorProvider>
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.calculatorContainer}>
          <Display />
        </View>
      </SafeAreaView>
    </CalculatorProvider>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: '#E5D9F2',
    height: '100%',
    width: '100%',
  },
  calculatorContainer:{
    flex: 1,
    margin: 20,
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
