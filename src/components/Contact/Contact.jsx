import { IoPerson } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6"
import PropTypes from "prop-types";
import css from "./Contact.module.css"

export default function Contact({ data: { id, name, number }, onDelete }) {
    return (
        <div className={css.contactContainer}>
      <div className={css.contactThumb}>
        <h2 className={css.contactName}>
          <IoPerson size="22" />
          {name}
        </h2>
        <p className={css.contactNumber}>
          <FaPhone size="22" />
          {number}
        </p>
      </div>
      <button className={css.buttonDelete} onClick={() => onDelete(id)}>
          Delete
      </button>
    </div>
    );
}

Contact.propTypes = {
  data: PropTypes.objectOf(PropTypes.string),
  onDelete: PropTypes.func,
};
