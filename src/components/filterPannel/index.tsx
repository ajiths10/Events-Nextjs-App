import { useFormik } from "formik";
import React, { FC, useEffect } from "react";
import { YEAR_DATA, MONTH_DATA } from "@/common/dummyData";
import { useRouter } from "next/router";
import { object, number, string, ObjectSchema } from "yup";
import TextField from "@mui/material/TextField";

const FilterPannel: FC<any> = ({ setFilter, filter }) => {
  const router = useRouter();

  const validationSchema: ObjectSchema<any> = object({
    date: string().min(1, "required").required("required"),
  });

  const formik = useFormik({
    initialValues: { date: "" },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      delete filter?.filter?.date;
      setFilter({ ...filter, filter: { date: values.date } });
    },
  });

  const handleReset = () => {
    let temp = { ...filter };
    delete temp?.filter?.date;
    setFilter(temp);
  };

  return (
    <div className="flex w-full justify-end items-center gap-2">
      <p>filter panel&nbsp;</p>
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-6 text-slate-700">
          <TextField
            fullWidth
            name="date"
            type="date"
            className=""
            size="small"
            placeholder="Select a date"
            value={formik.values.date}
            onChange={formik.handleChange}
            error={formik.touched.date && Boolean(formik.errors.date)}
            helperText={formik.touched.date && formik.errors.date}
          />
        </div>
        <div className="flex col-span-6 gap-2">
          <button
            className="bg-slate-400 w-1/2 h-10 border-gray-400 border text-slate-200 rounded-md font-semibold "
            onClick={() => formik.handleSubmit()}
          >
            Filter{" "}
          </button>
          <button
            className="bg-slate-400 w-1/2 h-10 border-gray-400 border text-slate-200 rounded-md font-semibold "
            onClick={handleReset}
          >
            Clear{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterPannel;
