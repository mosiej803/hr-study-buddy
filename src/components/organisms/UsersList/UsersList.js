import React from 'react';
import PropTypes from 'prop-types';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList } from './UsersList.styles';
import { Title } from 'components/atoms/Title/Title';
import { UserShape } from 'types';

const UsersList = ({ users }) => {
  return (
    <>
      <Title>Students list</Title>
      <StyledList>
        {users?.map((userData, i) => (
          <UsersListItem
            index={i}
            key={Object.values(userData).join('')}
            userData={userData}
          />
        ))}
      </StyledList>
    </>
  );
};

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape(UserShape)),
};

export default UsersList;
