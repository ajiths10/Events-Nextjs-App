import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import { object, string, number, boolean, array } from "yup";
import { useRouter } from "next/router";
import { formvalues } from "./types/createForm";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useCreateEvent } from "@/services/events/createPost";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import FormUpload from "../common/form/FileUpload";

const CreateForm = () => {
  const router = useRouter();

  //services
  let eventService = useCreateEvent();

  let initialValues: formvalues = {
    id: 0,
    title: "",
    description: "",
    location: "",
    date: "",
    image: [],
    is_featured: false,
  };
  const [initialState, setInitialState] = useState(initialValues);

  const validationSchema = object({
    id: number(),
    title: string().min(1, "required").required("required"),
    description: string().min(1, "required").required("required"),
    location: string().min(1, "required").required("required"),
    date: string().min(1, "required").required("required"),
    image: array().min(1, "Required").required("Required"),
    is_featured: boolean(),
  });

  const formik = useFormik({
    initialValues: initialState,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      delete values.id;
      console.log(values);
      eventService.mutate(values, {
        onSuccess: () => {
          alert("Done");
          resetForm();
        },
      });
    },
  });

  const resetForm = () => {
    setInitialState(initialValues);
    formik.resetForm();
  };

  return (
    <form
      className="flex flex-col items-start gap-3 mt-3 w-11/12 lg:w-8/12"
      onSubmit={formik.handleSubmit}
    >
      <span className="grid md:flex md:justify-between w-full md:gap-4 gap-2">
        <TextField
          fullWidth
          label="Title*"
          name="title"
          autoFocus
          value={formik.values.title}
          onChange={formik.handleChange}
          error={formik.touched.title && Boolean(formik.errors.title)}
          helperText={formik.touched.title && formik.errors.title}
        />
        <TextField
          fullWidth
          name="date"
          type="date"
          placeholder="Select a date"
          value={formik.values.date}
          onChange={formik.handleChange}
          error={formik.touched.date && Boolean(formik.errors.date)}
          helperText={formik.touched.date && formik.errors.date}
        />
      </span>
      <FormUpload
        acceptedFileTypes={["image/*"]}
        label="Image Upload "
        maxFiles={5}
        allowMultiple={true}
        name="image"
        formik={formik}
        value={formik.values.image}
        onChange={formik.handleChange}
        error={formik.touched.image && Boolean(formik.errors.image)}
        helperText={formik.touched.image && formik.errors.image}
      />

      <TextField
        fullWidth
        name="description"
        label="Description"
        multiline
        rows={4}
        value={formik.values.description}
        onChange={formik.handleChange}
        error={formik.touched.description && Boolean(formik.errors.description)}
        helperText={formik.touched.description && formik.errors.description}
      />
      <TextField
        fullWidth
        name="location"
        label="Enter Location"
        type="text"
        value={formik.values.location}
        onChange={formik.handleChange}
        error={formik.touched.location && Boolean(formik.errors.location)}
        helperText={formik.touched.location && formik.errors.location}
      />
      <FormControlLabel
        control={
          <Switch
            checked={formik.values.is_featured}
            name="is_featured"
            value={formik.values.is_featured}
            color="primary"
            onChange={formik.handleChange}
          />
        }
        label="make Feature"
        labelPlacement="end"
      />
      <span className="w-full flex justify-center my-5">
        <button
          type="submit"
          className="bg-[#334155] w-8/12 h-12 text-white rounded-md hover:bg-[#2b3646]"
        >
          Publish
        </button>
      </span>
    </form>
  );
};
export default CreateForm;
