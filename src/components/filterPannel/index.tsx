import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useFormik } from "formik";
import React, { FC } from "react";
import { YEAR_DATA, MONTH_DATA } from "@/common/dummyData";
import { useRouter } from "next/router";
import * as yup from "yup";

const FilterPannel: FC<any> = () => {
  const router = useRouter();

  //   const validationSchema: any = yup.object({
  //     year: yup.required("required"),
  //     month: yup.required("required"),
  //   });

  const formik = useFormik({
    initialValues: { month: 0, year: 0 },
    // validationSchema:validationSchema,
    onSubmit: (values) => {
      console.log(values);
      if (values.year && values.month) {
        router.push(`/events/${values.year}/${values.month}`);
      }
    },
  });

  return (
    <div className="flex w-full justify-end h-10">
      <p>filter panel&nbsp;</p>
      <div className="grid grid-cols-6  w-[400px] gap-2">
        <div className="col-span-2 text-slate-700">
          <Select
            id="month"
            value={formik.values.month}
            label="month"
            fullWidth
            name="month"
            className="w-[120px] h-[30px]"
            onChange={formik.handleChange}
            error={formik.touched.month && Boolean(formik.errors.month)}
            // helperText={formik.touched.month && formik.errors.month}
          >
            {MONTH_DATA.map((buscat) => (
              <MenuItem value={buscat.id}>{buscat.value}</MenuItem>
            ))}
          </Select>
        </div>
        <div className="col-span-2">
          <Select
            fullWidth
            id="year"
            value={formik.values.year}
            label="year"
            name="year"
            className="w-[120px] h-[30px]"
            onChange={formik.handleChange}
            error={formik.touched.year && Boolean(formik.errors.year)}
            // helperText={formik.touched.year && formik.errors.year}
          >
            {YEAR_DATA.map((buscat) => (
              <MenuItem value={buscat.id}>{buscat.value}</MenuItem>
            ))}
          </Select>
        </div>
        <div className="col-span-2">
          <button
            className="flex bg-slate-400 content-center w-20 h-7 border justify-center text-black rounded-md"
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
