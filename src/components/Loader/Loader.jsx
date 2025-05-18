import { useSelector } from "react-redux";
import { FadeLoader } from "react-spinners";
import { selectLoading } from "../../redux/contactsSlice.js";

const Loader = () => {
  const override = {
    display: "block",
    margin: "30px auto",
  };

  const loading = useSelector(selectLoading);

  return (
    <FadeLoader color="#1411de" loading={loading} cssOverride={override} />
  );
};

export default Loader;
