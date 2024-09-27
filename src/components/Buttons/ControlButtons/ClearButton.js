import { useContext } from 'react';
import { CalculatorContext } from '@contexts/CalculatorContext';
import Button from '../Button';

export default function ClearButton() {
  const { setInputExpression } = useContext(CalculatorContext);

  return <Button textValue="AC" onPress={() => setInputExpression([])} />;
}
