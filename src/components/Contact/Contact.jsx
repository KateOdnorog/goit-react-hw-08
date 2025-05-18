import s from "./Contact.module.css";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { GrUserManager } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <div className={s.containerContact}>
      <div>
        <p>
          <GrUserManager /> {contact.name}
        </p>
        <p>
          <MdOutlinePhoneAndroid /> {contact.number}
        </p>
      </div>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
