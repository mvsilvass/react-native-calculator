import { View, StyleSheet } from 'react-native';

import ClearButton from './ClearButton';
import CalculateButton from './CalculateButton';

export default function ControlButtons() {
  return (
    <View style={styles.controlButtonsContainer}>
      <ClearButton />
      <CalculateButton />
    </View>
  );
}

const styles = StyleSheet.create({
  controlButtonsContainer: {
    flexDirection: 'row',
    gap: 5,
  },
});
