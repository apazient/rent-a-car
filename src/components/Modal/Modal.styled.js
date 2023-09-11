import styled from "styled-components";
export const ModalOverlay = styled.div`
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 999;
  background-color: rgba(18, 20, 23, 0.5);
  backdrop-filter: blur(3.5px);
`;
