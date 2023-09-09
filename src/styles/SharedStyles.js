import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  height: ${(props) => props.$height || "100vh"};
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
  font-weight: 600;
  border: none;
  border-radius: 12px;
  color: ${(props) => props.$color || "inherit"};
  background-color: ${(props) => props.$bg || "inherit"};

  &:hover,
  &:focus {
    cursor: pointer;
    background-color: ${(props) => props.$bg || "inherit"};
  }
`;
