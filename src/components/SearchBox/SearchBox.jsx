import css from "./SearchBox.module.css";
import PropTypes from "prop-types";

export default function SearchBox ({ value, onFilter }) {
  const cleanInput = () => {
    onFilter("");
  };
  return (
    <div className={css.searchcontainer}>
      <p className={css.inputText}>Find contacts by name</p>
      <div className={css.inputcontainer}>
        <input
          className={css.formInput}
          type="text"
          value={value}
                  onChange={(e) => onFilter(e.target.value)}
                  onClick={cleanInput}
        />
               
      </div>
    </div>
  );
}

SearchBox.propTypes = {
  value: PropTypes.string,
  onFilter: PropTypes.func,
};

