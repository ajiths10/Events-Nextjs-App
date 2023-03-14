import { create } from "zustand";
import { enqueueSnackbar } from "notistack";

export const useSetAlert = create((set) => ({
  setAlert: (response: any) =>
    set(
      enqueueSnackbar(response.message, {
        variant: response.status ? "success" : "error",
        anchorOrigin: { vertical: "bottom", horizontal: "right" },
        //   preventDuplicate: true,
      })
    ),
}));
