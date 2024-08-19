import { useCallback } from "react";
import PropTypes from "prop-types";

const UserSelector = ({ users, onUserSelect }) => {
  const handleUserSelect = useCallback((event) => {
    onUserSelect(Number(event.target.value));
  }, [onUserSelect]);
    
 
  return (
    <select onChange={handleUserSelect}>
      <option value="">Select a user</option>
      {users.map((user) => (
        <option key={user.id} value={user.id}>
          {user.name}
        </option>
      ))}
    </select>
  );
};

UserSelector.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  onUserSelect: PropTypes.func.isRequired,
};

export default UserSelector;
