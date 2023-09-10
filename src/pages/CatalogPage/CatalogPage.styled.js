import styled from "styled-components";

export const LoadMore = styled.button`
  border: none;
  background-color: inherit;
  text-decoration: underline;
  font-family: Manrope;
  font-weight: 500;
  line-height: 1.5;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.link};
  margin: 0 0 150px 0;
  &:hover,
  &:focus {
    cursor: pointer;
  }
`;
