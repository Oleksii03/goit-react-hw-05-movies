import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavItem = styled(NavLink)`
  display: flex;
  margin-right: 10px;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  text-decoration: none;
  color: #000;
  transition: color 250ms linear, background-color 250ms linear;

  &.active {
    background-color: rgb(16, 121, 56);;
    color: #ffffff;
  }
`;
