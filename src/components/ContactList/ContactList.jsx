import Contact from "../Contact/Contact";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";

import css from "./ContactList.module.css";

export default function ContactList ({ contactList, onDelete }) {
  return (
    <ul className={css.listContacts}>
          {contactList.map((contact) => 
              <li className={css.itemContact} key={nanoid()}>
                  <Contact data={contact} onDelete={onDelete} />
              </li>
        )}
    </ul>
  );
}

ContactList.propTypes = {
  contactList: PropTypes.array,
  onDelete: PropTypes.func,
};