import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { getItem } from 'redux/contacts/selectors';
export const ContactForm = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({ name: '', number: '' });
  const contacts = useSelector(getItem);

  const handleSubmit = event => {
    event.preventDefault();
    const { name } = state;
    console.log(name);
    if (contacts.some(contact => contact.name === name)) {
      alert(`${name} контакт вже присутній`);
    }
    const form = event.target;
    dispatch(addContact(state));
    form.reset();
  };
  const handleChange = event => {
    const { name, value } = event.target;
    setState(prevState => ({ ...prevState, [name]: value }));
  };
  return (
    <div>
      <p>Name</p>
      <form onSubmit={handleSubmit}>
        <input
          value={state.name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
        <p>Number</p>
        <input
          value={state.number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />
        <button type="submit">Add contact</button>
      </form>
    </div>
  );
};
