import React, { useEffect, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { IDatePicker } from "./types";

const FormDate = (props: IDatePicker) => {
  const {
    value,
    label,
    name,
    error,
    helperText,
    disablePast = false,
    disableFuture = false,
    disabled,
    sx,
    formik,
  } = props;

  const [dateValue, setDateValue] = useState(value);

  useEffect(() => {
    if (dateValue) {
      formik.setFieldValue(name, dayjs(dateValue).format("MM-DD-YYYY"));
    }
  }, [dateValue]);

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["MobileDatePicker"]}>
          <MobileDatePicker
            label={label}
            value={dateValue}
            onChange={(newValue: any) => setDateValue(newValue)}
            disabled={disabled}
            disablePast={disablePast}
            disableFuture={disableFuture}
            sx={sx}
            slotProps={{
              textField: {
                helperText: helperText,
              },
            }}
          />
        </DemoContainer>
      </LocalizationProvider>
    </>
  );
};

export default FormDate;
