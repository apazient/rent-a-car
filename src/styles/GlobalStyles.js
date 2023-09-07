import { createGlobalStyle, styled } from "styled-components";

export const GlobalStyles = createGlobalStyle`
 
body{
  margin: 0;   
  overflow:hidden;
  color: ${({ theme }) => theme.colors.main};   
  font-family: Manrope, sans-serif;
  font-size: 14px;
  font-weight:400;
  line-height: 1.5;    
}

p,
h1,
h2,
h3,
h4,input {
  padding: 0;
  margin: 0;
}

img {
  display: block;
  max-width: 100%;
   width:100%;
  height: auto;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
a {
  text-decoration: none;
}

`;

export const Flex = styled.div`
  display: flex;
  min-height: ${(props) => props.$height || "100vh"};
  gap: ${(props) => props.$gap || "10px"};
  flex-direction: ${(props) => props.$direction || "row"};
  align-items: ${(props) => props.$items || "stretch"};
  justify-content: ${(props) => props.$justify || "stretch"};
`;
export const Box = styled.div`
  height: 100px;
  width: 100px;
  background-color: ${(props) => props.$bg || "black"};
`;
export const Button = styled.button`
  padding: 12px 50px;
  border: none;
  border-radius: 12px;
  color: ${(props) => props.$color || "inherit"};
  background-color: ${(props) => props.$bg || "inherit"};
  box-shadow: ${({ theme }) => theme.shadows.default};
  &:hover {
    cursor: pointer;
    background-color: lightgoldenrodyellow;
  }
`;
