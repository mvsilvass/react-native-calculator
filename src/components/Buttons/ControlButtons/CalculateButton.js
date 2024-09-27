import { useContext } from 'react';
import { CalculatorContext } from '@contexts/CalculatorContext';
import Button from '../Button';

export default function CalculateButton() {
  const { setInputExpression, calculate } = useContext(CalculatorContext);

  return (
    <Button textValue="=" onPress={() => setInputExpression([calculate()])} />
  );
}
