import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import metrics from '@utils/Metrics';
import PropTypes from 'prop-types';

export default function Button({ textValue, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{textValue}</Text>
    </TouchableOpacity>
  );
}

Button.propTypes = {
    textValue: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#CDC1FF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: metrics.screenWidth * 0.005,
    borderColor: '#6C48C5',
    paddingHorizontal: metrics.screenWidth * 0.08,
    paddingVertical: metrics.screenHeight * 0.025,
    margin: metrics.screenWidth * 0.005,
    flex: 1
  },
  buttonText: {
    textAlign: 'center',
    color: '#6C48C5',
    fontWeight: 'bold',
    fontSize: metrics.screenWidth * 0.05,
  },
});
