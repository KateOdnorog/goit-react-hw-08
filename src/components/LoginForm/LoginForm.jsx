import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import { Form, Field, Formik, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import * as yup from "yup";
import toast from "react-hot-toast";
import s from "./LoginForm.module.css";

const LoginForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    email: "",
    password: "",
  };

  const loginSchema = yup.object().shape({
    email: yup.string().email().trim().required(),
    password: yup
      .string()
      .trim()
      .min(3, "You must enter min 3 symbols")
      .max(50, "You can enter max 50 symbols")
      .required(),
  });

  const handleSubmit = (values, options) => {
    dispatch(login(values))
      .unwrap()
      .then(() => {
        toast.success("Login success");
      })
      .catch(() => {
        toast.error("Login error");
      });
    options.resetForm();
  };

  return (
    <div className={s.containerLoginForm}>
      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
        onSubmit={handleSubmit}
      >
        <Form autoComplete="off">
          <label>
            <span>Email</span>
            <Field type="email" name="email" placeholder="Enter your's email" />
            <ErrorMessage name="email" className={s.error} component="span" />
          </label>
          <label>
            <span>Password</span>
            <Field
              type="password"
              name="password"
              placeholder="Enter your's password"
            />
            <ErrorMessage
              name="password"
              className={s.error}
              component="span"
            />
          </label>
          <Link to="/register" className={s.link}>
            You don't have account? Sign UP!
          </Link>
          <button type="submit">Login</button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
