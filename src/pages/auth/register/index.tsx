import classNames from "classnames";
import { FormikHelpers, useFormik } from "formik";
import { Fragment } from "react";
import { Helmet } from "react-helmet";
import { ImSpinner2 } from "react-icons/im";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import Input from "../../../components/Input";

const className = {
  box: "shadow-mine bg-white mt-4 p-4 rounded-md",
  title: "text-2xl font-semibold text-neutral-800 text-center",
  subtitle: "text-sm text-[#606770] text-center",
  form: "mt-4",
  group: "flex items-center justify-between",
  groupItem: "w-[calc(50%-0.25rem)]",
  button:
    "px-4 py-2 text-center text-xl rounded-md font-semibold disabled:active:scale-100 active:scale-[0.98] disabled:cursor-not-allowed",
  signUpBtn:
    "inline-block min-w-[12.125rem] bg-green-600 hover:bg-green-500 disabled:bg-green-200 text-white",
  forgot:
    "text-secondary disabled:text-secondary/50 hover:text-secondary/90 hover:underline",
};

interface IValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const schema = Yup.object().shape({
  firstName: Yup.string(),
  lastName: Yup.string(),
  email: Yup.string()
    .required("Email address is required!")
    .email("Must be a valid email address!"),
  password: Yup.string().required("Password is required!"),
  confirmPassword: Yup.string()
    .required("Confirm password is required.")
    .oneOf([Yup.ref("password")], "Password must be matched!"),
});

export default function Register() {
  const initialValues: IValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
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
      <Helmet>
        <title>Register | We Chat</title>
      </Helmet>
      <div className={className.box}>
        <h3 className={className.title}>Log in to We Chat</h3>
        <p className={className.subtitle}>It's quick and easy</p>
        <form className={className.form} onSubmit={handleSubmit}>
          <div className={className.group}>
            <Input
              id="firstName"
              name="firstName"
              value={values.firstName}
              placeholder="First name"
              error={touched.firstName && errors.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              touched={touched.firstName}
              autoComplete="name"
              aria-label="First name"
              classes={{ root: className.groupItem }}
            />
            <Input
              classes={{ root: className.groupItem }}
              id="lastName"
              name="lastName"
              value={values.lastName}
              placeholder="Last name"
              error={touched.lastName && errors.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              touched={touched.lastName}
              autoComplete="name"
              aria-label="Last name"
            />
          </div>
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
          <Input
            type="password"
            id="confirmPassword"
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
          <div className="py-1.5 flex justify-center">
            <button
              type="submit"
              className={classNames(
                className.button,
                className.signUpBtn,
                isSubmitting && "flex items-center justify-center"
              )}
              disabled={!(isValid && dirty) || isSubmitting}
            >
              {isSubmitting && (
                <ImSpinner2 className="text-white animate-spin mr-2" />
              )}
              Register
            </button>
          </div>
        </form>
        <div className="mt-2 text-center">
          <Link to="/auth/login" className={className.forgot}>
            Already have an account?
          </Link>
        </div>
      </div>
    </Fragment>
  );
}
