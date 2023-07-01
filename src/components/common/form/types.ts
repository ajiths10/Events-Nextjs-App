export interface ISelect {
  label: string;
  isMulti?: false | true;
  disabled?: boolean;
  isRequired?: Boolean;
  isClearable?: boolean;
  parentClass?: string;
  name: string;
  formik: any;
  options?: any;
}
