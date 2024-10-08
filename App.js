import { SafeAreaView, StyleSheet } from 'react-native';
import { CalculatorProvider } from '@contexts/CalculatorContext';

import metrics from '@utils/Metrics';
import Display from '@components/Containers/Display';
import ButtonPanel from '@components/Containers/ButtonPanel';

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
    paddingHorizontal: metrics.screenWidth * 0.08,
    paddingVertical: metrics.screenHeight * 0.08,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
