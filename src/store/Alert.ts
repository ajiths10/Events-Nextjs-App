import { create } from "zustand";
import { enqueueSnackbar, VariantType } from "notistack";

interface IEnqueueOptions {
  /** Type of the snackbar */
  variant: "default" | "error" | "success" | "warning" | "info";
  /** Event fired when user clicks on action button (if any) */
  onClickAction(): void;
  /**
   * You can pass material-ui Snackbar props here, and they will be applied to this individual snackbar.
   * for example, this particular snackbar will be dismissed after 1sec.
   */
  autoHideDuration: number;
}

interface IEnqueueSnackbar {
  message: string;
  options?: Partial<IEnqueueOptions>;
}

interface Res {
  message: string;
  status: boolean;
}

interface Alert {
  setAlert: (response: Res) => void;
}

//handles alert trigger
const alertHandler = (response: Res) => {
  return enqueueSnackbar(response.message, {
    variant: response.status ? "success" : "error",
    anchorOrigin: { vertical: "bottom", horizontal: "right" },
    //   preventDuplicate: true,
  });
};

//create slice
export const useSetAlert = create<Alert>((set) => ({
  setAlert: (response) => alertHandler(response),
}));
