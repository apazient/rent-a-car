import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(NavLink)`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.main};
  &.active {
    color: ${({ theme }) => theme.colors.strong};
    text-decoration: underline;
  }
  &:hover:not(.active) {
    color: ${({ theme }) => theme.colors.link};
  }
`;
