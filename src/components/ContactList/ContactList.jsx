import { useDispatch, useSelector } from 'react-redux';
// import { deliteReducer } from '../../redux/FeedBack/usersSlice';
import { deliteContact } from '../../redux/contacts/operations';
import { selectFiltersContacts } from 'redux/contacts/selectors';
import { useLogin } from 'hooks/hooks';
export const ContactList = () => {
  const dispatch = useDispatch();
  const getFilteredContacts = useSelector(selectFiltersContacts);
  useLogin();

  const handleDelete = id => {
    dispatch(deliteContact(id));
  };

  return (
    <div>
      <ul>
        {getFilteredContacts.map(({ name, phone, id }) => (
          <li key={name}>
            <p>
              {name}: {phone}
            </p>
            <button onClick={() => handleDelete(id)}>Delite</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
