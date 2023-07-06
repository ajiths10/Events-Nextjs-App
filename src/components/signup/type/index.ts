export interface ISignUpInitialValues {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  confirm_password: string;
  agree_terms: boolean;
  country: ISelectBoxType;
  state: ISelectBoxType;
}

interface ISelectBoxType {
  label: string;
  value: string;
}
