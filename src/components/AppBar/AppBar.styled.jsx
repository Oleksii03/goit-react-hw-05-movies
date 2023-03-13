import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 8px;
  border-radius: 4px;
  text-decoration: none;
  color: #000;
  transition: color 250ms linear, background-color 250ms linear;

  &.active {
    background-color: rgb(16, 121, 56);;
    color: #ffffff;
  }
`;
