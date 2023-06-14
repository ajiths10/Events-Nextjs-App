import { renderToString } from "react-dom/server";
import { FilePond, registerPlugin } from "react-filepond";

// Import FilePond styles
import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
// Import FilePond Plugins
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginFileValidateSize from "filepond-plugin-file-validate-size";

// Register the plugins
registerPlugin(
  FilePondPluginImageExifOrientation,
  FilePondPluginImagePreview,
  FilePondPluginFileValidateType,
  FilePondPluginFileValidateSize
);

const FormUpload = (props: any) => {
  const {
    value,
    label,
    name,
    error,
    helperText,
    disabled,
    acceptedFileTypes,
    readOnly = false,
    maxFiles = 1,
    allowMultiple = false,
    maxFileSize = "5MB",
    formik,
  } = props;

  function genLabel() {
    return renderToString(
      <p>
        Drag & Drop your files or{" "}
        <span className="filepond--label-action">Browse</span>
      </p>
    );
  }

  const onChangeHandle = (value: any) => {
    formik.setFieldValue(name, value);
  };

  return (
    <>
      <div className={`w-full ${readOnly ? "cursor-not-allowed" : ""}`}>
        <label className={`mb-2 ${helperText ? "text-rose-600" : ""}`}>
          {label}
        </label>

        <div className={`${readOnly ? "pointer-events-none" : ""}`}>
          <FilePond
            name={name}
            files={value}
            allowMultiple={allowMultiple}
            onupdatefiles={onChangeHandle}
            maxFiles={maxFiles}
            labelIdle={genLabel()}
            credits={false}
            acceptedFileTypes={[...acceptedFileTypes]}
            // maxFileSize={maxFileSize}
          />
        </div>
      </div>

      {helperText ? <div className="text-rose-600">{helperText}</div> : null}
    </>
  );
};

export default FormUpload;
