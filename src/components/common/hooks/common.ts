import { Country, State } from "country-state-city";

// NUMBER FORMATER
export const roundNumbers = (value?: string | number) => {
  if (!value) return "no data";

  const valueAsNumber = Number(value);
  if (valueAsNumber % 1 === 0) return valueAsNumber;
  return Number(valueAsNumber).toFixed(2);
};

export const useGetCountryOptions = () => {
  const countryOptions = Country.getAllCountries().map((item) => ({
    label: item.name,
    value: item.isoCode,
  }));

  return countryOptions;
};
