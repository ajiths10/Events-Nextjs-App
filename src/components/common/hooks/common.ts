// NUMBER FORMATER
export const roundNumbers = (value?: string | number) => {
  if (!value) return "no data";

  const valueAsNumber = Number(value);
  if (valueAsNumber % 1 === 0) return valueAsNumber;
  return Number(valueAsNumber).toFixed(2);
};
