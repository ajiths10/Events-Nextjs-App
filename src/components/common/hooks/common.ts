import { Country, State } from "country-state-city";

// NUMBER FORMATER
export const roundNumbers = (value?: string | number) => {
  if (!value) return "no data";

  const valueAsNumber = Number(value);
  if (valueAsNumber % 1 === 0) return valueAsNumber;
  return Number(valueAsNumber).toFixed(2);
};

// RETURN COUNTRY OPTION
export const useGetCountryOptions = () => {
  const countryOptions = Country.getAllCountries().map((item) => ({
    label: item.name,
    value: item.isoCode,
  }));

  return countryOptions;
};

// RETURN STATE OPTION
export const useGetStateOptions = (country?: string) => {
  if (!country) return [];
  let stateOptions = State?.getStatesOfCountry?.(String(country)).map(
    (item) => ({
      label: item.name,
      value: item.isoCode,
    })
  );

  return stateOptions;
};
