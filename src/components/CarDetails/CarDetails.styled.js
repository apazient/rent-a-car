import styled from "styled-components";
import {
  Focus,
  Title,
  WrapperSvg,
  WrapperText,
} from "../../styles/SharedStyles";

export const WrapperDetail = styled.div`
  position: relative;
  border-radius: 24px;
  width: 540px;
  padding: 40px;
  background-color: ${({ theme }) => theme.colors.second};
`;

export const TitleD = styled(Title)`
  display: block;
`;

export const WrapperTextD = styled(WrapperText)`
  margin-bottom: 14px;
`;
export const WrapperTextF = styled(WrapperText)`
  margin-bottom: 24px;
`;
export const Descr = styled.p`
  line-height: 1.42;
  margin-bottom: 24px;
`;
export const TextD = styled.h2`
  line-height: 1.42;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 500;
`;

export const Condit = styled.span`
  display: inline-block;
  background-color: #f9f9f9;
  border-radius: 35px;
  padding: 7px 14px;
`;
export const WrapperCondit = styled.div`
  display: flex;

  flex-wrap: wrap;
  gap: 8px;
`;

export const FocusC = styled(Focus)`
  font-family: Montserrat;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: -0.24px;
`;
export const WrapperSvgX = styled(WrapperSvg)`
  top: 16px;
  right: 16px;
`;

export const Button = styled.a`
  display: inline-block;
  margin-top: 24px;
  padding: 12px 50px;
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.second};
  background-color: ${({ theme }) => theme.colors.link};
  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.strong};
  }
`;
