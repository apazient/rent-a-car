import styled from "styled-components";
import { Button } from "../../styles/SharedStyles";

export const Item = styled.li`
  position: relative;
  width: 274px;
`;
export const ImgWrapper = styled.div`
  width: 100%;
  height: 280px;
  margin-bottom: 14px;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.main};
  font-size: 16px;
  font-weight: 500;
`;

export const TitleBack = styled.span`
  display: inline-block;
`;
export const Focus = styled.span`
  color: ${({ theme }) => theme.colors.link};
`;
export const Text = styled.span`
display:inline-block;
font-size:12px;
 color: ${({ theme }) => theme.colors.description};

&:not(:last-child):after {
  content: '';
display:inline-block;
    vertical-align: sub;
  width: 1px; 
  height:16px; 
  background: rgba(18, 20, 23, 0.10);
  margin: 0 6px 0 6px;
}
&`;

export const WrapperText = styled.div`
  height: 40px;
  margin-bottom: 48px;
  text-align: start;
`;

export const LearnButton = styled(Button)`
  width: inherit;
  color: ${({ theme }) => theme.colors.second};
  background-color: ${({ theme }) => theme.colors.link};
  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.strong};
  }
`;

export const WrapperSvg = styled.div`
  position: absolute;
  right: 14px;
  top: 14px;
  &:hover,
  &:focus {
    cursor: pointer;
  }
`;
