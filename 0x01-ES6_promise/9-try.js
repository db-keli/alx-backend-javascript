export default function guardrail(mathFunction) {
  const result = [];
  try {
    result.push(mathFunction());
  } catch (error) {
    result.push(error.toString());
  } finally {
    result.push('Guardrail was processed');
  }
  return result;
}
