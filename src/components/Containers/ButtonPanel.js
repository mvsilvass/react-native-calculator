import { StyleSheet, View } from 'react-native';

import ControlButtons from '../Buttons/ControlButtons/ControlButtons';

export default function ButtonPanel() {
  return (
    <View style={styles.buttonPanelContainer}>
        <ControlButtons />
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
