import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
 
body{
  margin: 0 auto;   
  color: ${({ theme }) => theme.colors.main};   
  font-family: Manrope, sans-serif;
  font-size: 14px;
  font-weight:400;
  line-height: 1.5;    
  max-width: 1214px;
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
  height: 100%;
  border-radius: 14px;
  object-fit:cover; 
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
