import { TouchableOpacity, Text, StyleSheet } from 'react-native';
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
    borderWidth: 2,
    borderColor: '#6C48C5',
    paddingHorizontal: 30,
    padding: "5%",
    margin: 2.5,
    flex: 1
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 25,
  },
});
