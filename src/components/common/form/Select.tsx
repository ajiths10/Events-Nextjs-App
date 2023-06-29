import Select from "react-select";

const FormSelect = (props: any) => {
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
  } = props;

  const handleChange = (e: any) => {
    formik.setFieldValue(name, e);
  };

  return (
    <div className={parentClass}>
      <label
        htmlFor={props.id || name}
        style={{
          color:
            formik.touched[name] && Boolean(formik.errors[name]) ? "red" : "",
        }}
      >
        {formik.touched[name] && Boolean(formik.errors[name]) && (
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
      />

      {formik.touched[name] && Boolean(formik.errors[name]) ? (
        <div className="text-red-600">
          {formik.touched[name] && formik.errors[name]}
        </div>
      ) : null}
    </div>
  );
};

export default FormSelect;
