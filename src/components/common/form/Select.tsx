import React from "react";
import Select from "react-select";
import { ISelect } from "./types";

const FormSelect = (props: ISelect) => {
  const {
    label,
    isMulti = false,
    disabled,
    isRequired = false,
    isClearable = false,
    parentClass,
    name,
    formik,
    options,
    containerClass,
  } = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    formik.setFieldValue(name, e);
  };

  return (
    <div className={parentClass}>
      <label
        htmlFor={name}
        style={{
          color: Boolean(formik.errors[name]) ? "red" : "",
        }}
      >
        {Boolean(formik.errors[name]) && (
          <span className="text-red-600">*</span>
        )}
        {label}
      </label>
      <Select
        name={name}
        value={formik.values[name]}
        onChange={handleChange}
        isMulti={isMulti}
        isDisabled={disabled}
        isClearable={isClearable}
        options={options}
        className={containerClass}
      />

      {Boolean(formik.errors[name]) ? (
        <div className="text-red-600">{formik.errors[name]}</div>
      ) : null}
    </div>
  );
};

export default FormSelect;
