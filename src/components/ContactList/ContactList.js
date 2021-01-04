import React from "react";
import PropTypes from "prop-types";
import styles from "./contactList.module.css";

const ContactList = ({ contacts, onRemoveContact }) => (
  <ul className={styles.list}>
    {contacts.map((contact) => (
      <li className={styles.list_item} key={contact.id}>
        {`${contact.name} : ${contact.number}`}
        {
          <button
            className={styles.list_button}
            type="button"
            name="delte"
            onClick={() => onRemoveContact(contact.id)}
          >
            delete
          </button>
        }
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  onRemoveContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
