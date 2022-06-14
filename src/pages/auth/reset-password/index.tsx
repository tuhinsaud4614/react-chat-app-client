import classNames from "classnames";
import { FormikHelpers, useFormik } from "formik";
import { Fragment, useId } from "react";
import { Helmet } from "react-helmet";
import { ImSpinner2 } from "react-icons/im";
import { Link, Navigate, useSearchParams } from "react-router-dom";
import * as Yup from "yup";
import Input from "../../../components/Input";

const className = {
  box: "shadow-mine bg-white mt-4 rounded-md",
  title: "text-xl font-semibold text-neutral-800 p-4",
  errorBox: "p-3 mb-4 border border-[#dd3c10] bg-[#ffebe8]",
  errorBoxTitle: "text-base leading-5 font-semibold mb-1 text-neutral-800",
  form: "p-4",
  para: "text-base leading-5 mb-4",
  button:
    "inline-block px-5 py-1.5 text-center text-base rounded-md font-semibold disabled:active:scale-100 active:scale-[0.98] disabled:cursor-not-allowed",
  continueBtn:
    "bg-secondary disabled:bg-secondary/50 hover:bg-secondary/90 text-white ml-2",
  skipBtn: "bg-[#e4e6eb] text-[#4b4f56]",
};

interface IValues {
  newPassword: string;
  confirmPassword: string;
}

const schema = Yup.object().shape({
  newPassword: Yup.string().required("Password is required!"),
  confirmPassword: Yup.string()
    .required("Confirm password is required.")
    .oneOf([Yup.ref("password")], "Password must be matched!"),
});

export default function ResetPassword() {
  const [searchParams] = useSearchParams();
  const userId = searchParams.get("u");
  const code = searchParams.get("c");

  const initialValues: IValues = {
    newPassword: "",
    confirmPassword: "",
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

  const newPasswordId = useId();
  const confirmPasswordId = useId();

  if (!userId || !code) {
    return <Navigate to="/auth/forgot-password" />;
  }

  return (
    <Fragment>
      <Helmet>
        <title>Recovery Password | We Chat</title>
      </Helmet>
      <div className={className.box}>
        <h3 className={className.title}>Choose a new password</h3>
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
              Create a new password that is at least 6 characters long. A strong
              password has a combination of letters, digits and punctuation
              marks.
            </p>
            <Input
              type="password"
              id={newPasswordId}
              name="newPassword"
              value={values.newPassword}
              placeholder="New password"
              error={touched.newPassword && errors.newPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              touched={touched.newPassword}
              autoComplete="off"
              aria-label="New password"
              autoFocus
            />
            <Input
              type="password"
              id={confirmPasswordId}
              name="confirmPassword"
              value={values.confirmPassword}
              placeholder="Confirm password"
              error={touched.confirmPassword && errors.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              touched={touched.confirmPassword}
              autoComplete="off"
              aria-label="Confirm password"
            />
          </section>
          <hr className="border border-b" />
          <div className="p-4 flex items-center justify-end">
            <Link
              type="button"
              to="/auth/login"
              className={classNames(className.button, className.skipBtn)}
            >
              Skip
            </Link>
            <button
              type="submit"
              className={classNames(
                className.button,
                className.continueBtn,
                isSubmitting && "flex items-center justify-center"
              )}
              disabled={!(isValid && dirty) || isSubmitting}
            >
              {isSubmitting && (
                <ImSpinner2 className="text-white animate-spin mr-2" />
              )}
              Continue
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
}
