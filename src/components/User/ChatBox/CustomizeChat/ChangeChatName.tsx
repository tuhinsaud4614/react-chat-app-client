import classNames from "classnames";
import { FormikHelpers, useFormik } from "formik";
import * as React from "react";
import { BiPencil } from "react-icons/bi";
import { ImSpinner2 } from "react-icons/im";
import * as Yup from "yup";
import Input from "../../../Input";
import Modal from "../../../Modal";
import OptionsItem from "../OptionsItem";

const className = {
  title: "text-neutral-700 font-semibold flex-grow text-center",
  label: "text-xs text-neutral-500 block mb-2.5",
  buttons: "flex items-center mt-2.5",
  button:
    "flex-grow px-4 py-2.5 text-center capitalize text-xl rounded-md font-semibold disabled:active:scale-100 active:scale-[0.98] disabled:cursor-not-allowed",
  cancelBtn: "bg-gray-200 hover:bg-gray-300 text-neutral-700",
  saveBtn:
    "bg-secondary disabled:bg-secondary/50 hover:bg-secondary/90 text-white",
};

interface IValues {
  value: string;
}

const schema = Yup.object().shape({
  value: Yup.string()
    .required("Chat name is required!")
    .max(500, "Max length should be 500!"),
});

export default function ChangeChatName() {
  const [open, setOpen] = React.useState(false);
  const inputId = React.useId();

  const initialValues: IValues = {
    value: "",
  };

  const onSubmit = async (
    values: IValues,
    formikHelpers: FormikHelpers<IValues>
  ) => {};

  const {
    handleSubmit,
    touched,
    handleChange,
    handleBlur,
    errors,
    isValid,
    dirty,
    values,
    isSubmitting,
  } = useFormik({
    initialValues,
    onSubmit,
    validationSchema: schema,
  });

  return (
    <React.Fragment>
      <Modal onHide={() => setOpen(false)} open={open}>
        <Modal.Head closeIcon>
          <h3 className={className.title}>Change chat name</h3>
        </Modal.Head>
        <Modal.Body className="p-4">
          <span className={className.label}>
            Changing the name of a group chat changes it for everyone.
          </span>
          <form onSubmit={handleSubmit}>
            <Input
              id={inputId}
              name="value"
              value={values.value}
              placeholder="Chat name"
              error={touched.value && errors.value}
              onChange={handleChange}
              onBlur={handleBlur}
              touched={touched.value}
              autoComplete="chat-name"
              aria-label="Chat name"
              maxLength={500}
              autoFocus
            />
            <div className={className.buttons}>
              <button
                type="button"
                aria-label="Cancel"
                className={classNames(className.button, className.cancelBtn)}
                onClick={() => setOpen(false)}
              >
                cancel
              </button>
              <span className="inline-block w-4 h-4" />
              <button
                type="submit"
                aria-label="Save"
                className={classNames(
                  className.button,
                  className.saveBtn,
                  isSubmitting && "flex items-center justify-center"
                )}
                disabled={!(isValid && dirty) || isSubmitting}
              >
                {isSubmitting && (
                  <ImSpinner2 className="text-white animate-spin mr-2" />
                )}
                Save
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
      <OptionsItem icon={BiPencil} onClick={() => setOpen(true)}>
        Change chat name
      </OptionsItem>
    </React.Fragment>
  );
}
