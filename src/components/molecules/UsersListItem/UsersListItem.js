import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Average from 'components/atoms/Average/Average';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import { Wrapper, StyledName, StyledAttendance } from './UsersListItem.styles';
import { UserShape } from 'types';
import { UsersContext } from 'providers/UsersProvider';

const UsersListItem = ({ userData: { name, attendance, average = '0%' } }) => {
  const { deleteUser } = useContext(UsersContext);

  return (
    <Wrapper>
      <Average average={average} />
      <div>
        <StyledName>{name}</StyledName>
        <StyledAttendance>attendance: {attendance}</StyledAttendance>
      </div>
      <DeleteButton onClick={() => deleteUser(name)} />
    </Wrapper>
  );
};

UsersListItem.propTypes = {
  userData: PropTypes.shape(UserShape),
};

export default UsersListItem;
