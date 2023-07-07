export interface ISelect {
  label: string;
  isMulti?: false | true;
  disabled?: boolean;
  isRequired?: Boolean;
  isClearable?: boolean;
  parentClass?: string;
  containerClass?: string;
  name: string;
  formik: any;
  options?: any;
}

export interface IDatePicker {
  value: string;
  label: string;
  name: string;
  error?: any;
  helperText?: string;
  disablePast: boolean;
  disableFuture: boolean;
  disabled?: boolean;
  sx: any;
  formik: any;
}
