import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(NavLink)`
  padding: 20px 40px;
  border-radius: 14px;
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.second};
  background-color: ${({ theme }) => theme.colors.link};
  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.strong};
  }
`;

export const WrapperHome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  gap: 20px;
`;

export const WrapperI = styled.div`
  width: 70%;
`;
