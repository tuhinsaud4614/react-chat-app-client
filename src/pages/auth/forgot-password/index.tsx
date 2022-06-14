import classNames from "classnames";
import { FormikHelpers, useFormik } from "formik";
import { Fragment, useId } from "react";
import { Helmet } from "react-helmet";
import { ImSpinner2 } from "react-icons/im";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import Input from "../../../components/Input";

const className = {
  box: "shadow-mine bg-white mt-4 rounded-md",
  title: "text-xl font-semibold text-neutral-800 p-4 capitalize",
  errorBox: "p-3 mb-4 border border-[#dd3c10] bg-[#ffebe8]",
  errorBoxTitle: "text-base leading-5 font-semibold mb-1 text-neutral-800",
  form: "p-4",
  para: "text-base leading-5 mb-4",
  button:
    "inline-block px-5 py-1.5 text-center text-base rounded-md font-semibold disabled:active:scale-100 active:scale-[0.98] disabled:cursor-not-allowed",
  searchBtn:
    "bg-secondary disabled:bg-secondary/50 hover:bg-secondary/90 text-white ml-2",
  cancelBtn: "bg-[#e4e6eb] text-[#4b4f56]",
};

interface IValues {
  email: string;
}

const schema = Yup.object().shape({
  email: Yup.string()
    .required("Email address is required!")
    .email("Must be a valid email address!"),
});

export default function ForgotPassword() {
  const initialValues: IValues = {
    email: "",
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

  const emailId = useId();

  return (
    <Fragment>
      <Helmet>
        <title>Forgotten Password | We Chat</title>
      </Helmet>
      <div className={className.box}>
        <h3 className={className.title}>find your account</h3>
        <hr className="border border-b" />
        <form onSubmit={handleSubmit}>
          <section className={className.form}>
            <div className={className.errorBox}>
              <h6 className={className.errorBoxTitle}>No search results</h6>
              <p className="text-xs">
                Your search did not return any results. Please try again with
                other information.
              </p>
            </div>
            <p className={className.para}>
              Please enter your email address or mobile number to search for
              your account.
            </p>
            <Input
              type="email"
              id={emailId}
              name="email"
              value={values.email}
              placeholder="Email address"
              error={touched.email && errors.email}
              onChange={handleChange}
              onBlur={handleBlur}
              touched={touched.email}
              autoComplete="email"
              aria-label="Email address"
              autoFocus
            />
          </section>
          <hr className="border border-b" />
          <div className="p-4 flex items-center justify-end">
            <Link
              type="button"
              to="/auth/login"
              className={classNames(className.button, className.cancelBtn)}
            >
              Cancel
            </Link>
            <button
              type="submit"
              className={classNames(
                className.button,
                className.searchBtn,
                isSubmitting && "flex items-center justify-center"
              )}
              disabled={!(isValid && dirty) || isSubmitting}
            >
              {isSubmitting && (
                <ImSpinner2 className="text-white animate-spin mr-2" />
              )}
              Search
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
}
