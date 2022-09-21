import React from 'react';
import { Wrapper, Logo, StyledLink } from './Navigation.styles';

const Navigation = () => (
  <Wrapper>
    <Logo>
      <h1>
        Study
        <br />
        Buddy
      </h1>
    </Logo>
    <StyledLink to="/">Dashboard</StyledLink>
    <StyledLink to="/add-user">Add User</StyledLink>
    <StyledLink to="/">Settings</StyledLink>
    <StyledLink to="/">Logout</StyledLink>
  </Wrapper>
);

export default Navigation;
