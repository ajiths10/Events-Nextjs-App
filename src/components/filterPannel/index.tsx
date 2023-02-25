import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useFormik } from "formik";
import React, { FC } from "react";
import { YEAR_DATA, MONTH_DATA } from "@/common/dummyData";
import { useRouter } from "next/router";
import { object, number, string, ObjectSchema } from "yup";

const FilterPannel: FC<any> = () => {
  const router = useRouter();

  const validationSchema: ObjectSchema<any> = object({
    year: number().required("required"),
    month: number().required("required"),
  });

  const formik = useFormik({
    initialValues: { month: 1, year: 2020 },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      if (values.year && values.month) {
        router.push(`/events/${values.year}/${values.month}`);
      }
    },
  });

  return (
    <div className="flex w-full lg:justify-end justify-between">
      <p>filter panel&nbsp;</p>
      <div className="grid grid-cols-6 gap-2 w-8/12 lg:w-4/12">
        <div className="sm:col-span-2 col-span-6 text-slate-700">
          <Select
            id="month"
            value={formik.values.month}
            label="month"
            fullWidth
            name="month"
            className="w-full h-[30px]"
            onChange={formik.handleChange}
            error={formik.touched.month && Boolean(formik.errors.month)}
            // helperText={formik.touched.month && formik.errors.month}
          >
            {MONTH_DATA.map((buscat, i) => (
              <MenuItem key={buscat.id} value={buscat.id}>
                {buscat.value}
              </MenuItem>
            ))}
          </Select>
        </div>
        <div className="sm:col-span-2 col-span-6">
          <Select
            fullWidth
            id="year"
            value={formik.values.year}
            label="year"
            name="year"
            className="w-full h-[30px]"
            onChange={formik.handleChange}
            error={formik.touched.year && Boolean(formik.errors.year)}
            // helperText={formik.touched.year && formik.errors.year}
          >
            {YEAR_DATA.map((buscat) => (
              <MenuItem key={buscat.id} value={buscat.id}>
                {buscat.value}
              </MenuItem>
            ))}
          </Select>
        </div>
        <div className="sm:col-span-2 col-span-6">
          <button
            className="flex bg-slate-400 content-center lg:w-20 w-10/12 m-auto h-7 border justify-center text-black rounded-md"
            onClick={() => formik.handleSubmit()}
          >
            Apply{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterPannel;
