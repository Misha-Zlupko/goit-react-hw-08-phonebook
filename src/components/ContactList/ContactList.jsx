import { useDispatch, useSelector } from 'react-redux';
// import { deliteReducer } from '../../redux/FeedBack/usersSlice';
import { deliteContact } from '../../redux/contacts/operations';
import { selectFiltersContacts } from 'redux/contacts/selectors';
// import { useLogin } from 'hooks/hooks';
import { fetchContacts } from '../../redux/contacts/operations';
import { useEffect } from 'react';
export const ContactList = () => {
  const dispatch = useDispatch();
  const getFilteredContacts = useSelector(selectFiltersContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDelete = id => {
    dispatch(deliteContact(id));
  };

  return (
    <div>
      <ul>
        {getFilteredContacts.map(({ name, number, id }) => (
          <li key={name}>
            <p>
              {name}: {number}
            </p>
            <button onClick={() => handleDelete(id)}>Delite</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
