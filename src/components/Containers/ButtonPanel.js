import { StyleSheet, View } from 'react-native';

import ControlButtons from '../Buttons/ControlButtons/ControlButtons';
import NumericButtons from '../Buttons/NumericButtons/NumericButtons';

export default function ButtonPanel() {
  return (
    <View style={styles.buttonPanelContainer}>
        <ControlButtons />

        <View style={styles.rowContainer}>
          <NumericButtons />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonPanelContainer: {
    width: '100%',
    gap: 5,
  },
  rowContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 5,
  },
});
