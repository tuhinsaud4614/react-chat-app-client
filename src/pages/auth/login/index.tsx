import classNames from "classnames";
import { Fragment } from "react";
import { Link } from "react-router-dom";
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

export default function Login() {
  return (
    <Fragment>
      <div className={className.box}>
        <h3 className={className.title}>Log in to We Chat</h3>
        <form className={className.form}>
          <Input
            type="email"
            placeholder="Email address"
            error="The email address or mobile number you entered isn't connected to an account"
            touched
          />
          <Input type="password" placeholder="Password" />
          <div className="py-1.5">
            <button
              type="submit"
              className={classNames(className.button, className.loginBtn)}
            >
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
