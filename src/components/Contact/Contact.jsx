import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { GrUserManager } from "react-icons/gr";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import s from "./Contact.module.css";

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
      <IconButton aria-label="delete" onClick={handleDelete}>
        <DeleteIcon />
      </IconButton>
    </div>
  );
};

export default Contact;
