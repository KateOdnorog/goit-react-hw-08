import { useDispatch, useSelector } from "react-redux";
import { selectFilter } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";
import s from "./SearchBox.module.css";

const SearchBox = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={s.containerSearch}>
      <h2>Find contacts by name or number</h2>
      <input
        type="text"
        name=""
        onChange={handleChange}
        value={filter}
        placeholder="Enter name or number..."
      />
    </div>
  );
};

export default SearchBox;
