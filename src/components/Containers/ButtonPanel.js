import { StyleSheet, View } from 'react-native';

import ControlButtons from '../Buttons/ControlButtons/ControlButtons';
import NumericButtons from '../Buttons/NumericButtons/NumericButtons';
import OperationButtons from '../Buttons/OperationButtons/OperationButtons';

export default function ButtonPanel() {
  return (
    <View style={styles.buttonPanelContainer}>
      <View>
        <ControlButtons />
      </View>   

      <View style={styles.rowContainer}>
        <View style={styles.numericButtons}>
          <NumericButtons />
        </View>  

        <View style={styles.operationButtons}>
          <OperationButtons />
        </View>  
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonPanelContainer: {
    width: '100%',
    marginTop: 10,
  },
  rowContainer: {
    flexDirection: 'row',
  },
  numericButtons:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 2
  },
});
