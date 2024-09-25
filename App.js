import { SafeAreaView, StyleSheet } from 'react-native';
import { CalculatorProvider } from './src/contexts/CalculatorContext';

import Display from './src/components/Containers/Display';
import ButtonPanel from './src/components/Containers/ButtonPanel';

export default function App() {
  return (
    <CalculatorProvider>
      <SafeAreaView style={styles.appContainer}>
        <Display />
        <ButtonPanel/>
      </SafeAreaView>
    </CalculatorProvider>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: '#E5D9F2',
    height: '100%',
    width: '100%',
    padding: "5%",
    justifyContent: 'center',
    alignItems: 'center',
  },
});
