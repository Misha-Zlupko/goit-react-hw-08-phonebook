import { useSelector, useDispatch } from 'react-redux';
// import { searchReducer } from '../../redux/FeedBack/usersSlice';
import { selectFilter } from 'redux/contacts/selectors';
import { setFilter } from 'redux/contacts/slice';
export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const handleChangeSearch = event => {
    dispatch(setFilter(event.target.value));
  };
  return (
    <div>
      <form>
        <input value={filter} type="text" onChange={handleChangeSearch} />
      </form>
    </div>
  );
};
