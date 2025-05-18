import { Field, Form, Formik, ErrorMessage } from "formik";
import { useId } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import * as yup from "yup";
import s from "./ContactForm.module.css";

const ContactForm = () => {
  const initialValues = {
    name: "",
    number: "",
  };

  const contactFormSchema = yup.object().shape({
    name: yup
      .string()
      .trim()
      .min(3, "You must enter min 3 symbols")
      .max(50, "You can enter max 50 symbols")
      .required(),
    number: yup
      .string()
      .trim()
      .min(3, "You must enter min 3 symbols")
      .max(20, "You can enter max 20 symbols")
      .required(),
  });

  const nameFieldId = useId();
  const numberFieldId = useId();

  const dispatch = useDispatch();

  const handleSubmit = (values, options) => {
    dispatch(addContact(values));
    options.resetForm();
  };

  return (
    <div className={s.containerFormAdd}>
      <Formik
        validationSchema={contactFormSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <Form>
          <label htmlFor={nameFieldId}>
            <span>Name</span>
            <Field
              name="name"
              id={nameFieldId}
              placeholder="Enter contact's Name"
            ></Field>
            <ErrorMessage name="name" className={s.error} component="span" />
          </label>
          <label htmlFor={nameFieldId}>
            <span>Number</span>
            <Field
              name="number"
              type="phone"
              id={numberFieldId}
              placeholder="Enter contact's phone number"
            ></Field>
            <ErrorMessage name="number" className={s.error} component="span" />
          </label>
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
