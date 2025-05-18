import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { Form, Field, Formik, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import * as yup from "yup";
import toast from "react-hot-toast";
import s from "./RegisterForm.module.css";

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, options) => {
    dispatch(register(values))
      .unwrap()
      .then(() => {
        toast.success("Register success");
      })
      .catch(() => {
        toast.error(`Register error`);
      });
    options.resetForm();
  };

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const registerSchema = yup.object().shape({
    name: yup
      .string()
      .trim()
      .min(3, "You must enter min 3 symbols")
      .max(50, "You can enter max 50 symbols")
      .required(),
    email: yup.string().email().trim().required(),
    password: yup
      .string()
      .trim()
      .min(7, "You must enter min 3 symbols")
      .max(50, "You can enter max 50 symbols")
      .required(),
  });

  return (
    <div className={s.containerRegisterForm}>
      <Formik
        onSubmit={handleSubmit}
        validationSchema={registerSchema}
        initialValues={initialValues}
      >
        <Form autoComplete="off">
          <label>
            <span>Username</span>
            <Field
              type="text"
              name="name"
              placeholder="Enter your's username"
            />
            <ErrorMessage name="name" className={s.error} component="span" />
          </label>
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
          <Link to="/login" className={s.link}>
            You already have account? Sign IN!
          </Link>
          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterForm;
