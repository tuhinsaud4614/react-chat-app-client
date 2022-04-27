import classNames from "classnames";
import { FormikHelpers, useFormik } from "formik";
import { Fragment } from "react";
import { ImSpinner2 } from "react-icons/im";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import Input from "../../../components/Input";
import TextDivide from "../../../components/TextDivide";

const className = {
  box: "shadow-mine bg-white mt-4 p-4 rounded-md",
  title: "text-lg text-neutral-800 text-center",
  form: "mt-4",
  button: "px-4 py-2.5 text-center text-xl rounded-md font-semibold",
  loginBtn:
    "block w-full bg-secondary disabled:bg-secondary/50 hover:bg-secondary/90 text-white",
  forgot:
    "text-secondary disabled:text-secondary/50 hover:text-secondary/90 hover:underline",
  forgotLink: "inline-block bg-green-600 hover:bg-green-500  text-white",
};

interface IValues {
  email: string;
  password: string;
}

const schema = Yup.object().shape({
  email: Yup.string()
    .required("Email address is required!")
    .email("Must be a valid email address!"),
  password: Yup.string().required("Password is required!"),
});

export default function Login() {
  const initialValues: IValues = {
    email: "",
    password: "",
  };

  const onSubmit = async (
    values: IValues,
    formikHelpers: FormikHelpers<IValues>
  ) => {
    console.log(values);
  };

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
    <Fragment>
      <div className={className.box}>
        <h3 className={className.title}>Log in to We Chat</h3>
        <form className={className.form} onSubmit={handleSubmit}>
          <Input
            type="email"
            id="email"
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
          <Input
            type="password"
            id="password"
            name="password"
            value={values.password}
            placeholder="Password"
            error={touched.password && errors.password}
            onChange={handleChange}
            onBlur={handleBlur}
            touched={touched.password}
            autoComplete="current-password"
            aria-label="Password"
          />
          <div className="py-1.5">
            <button
              type="submit"
              className={classNames(
                className.button,
                className.loginBtn,
                isSubmitting && "flex items-center justify-center"
              )}
              disabled={!(isValid && dirty) || isSubmitting}
            >
              {isSubmitting && (
                <ImSpinner2 className="text-white animate-spin mr-2" />
              )}
              Log In
            </button>
          </div>
        </form>
        <div className="mt-2 text-center">
          <Link to="/auth/forgot-password" className={className.forgot}>
            Forgotten password?
          </Link>
        </div>
        <TextDivide classes={{ root: "py-2.5 px-4 w-full" }}>or</TextDivide>

        <div className="py-1.5 flex justify-center">
          <Link
            to="/auth/register"
            className={classNames(className.button, className.forgotLink)}
          >
            Create New Account
          </Link>
        </div>
      </div>
    </Fragment>
  );
}
