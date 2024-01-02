import Theme from "@/theme/component/colors";
import styled from "styled-components";

export const ModalTable = styled.div`
  position: 'absolute' as 'absolute';
  top: '50%';
  left: '50%';
  transform: 'translate(-50%, -50%)';
  width: 400;
  background: ${Theme.palette.secondry.light};
  color:black;
  border: '2px solid blue';
  box-shadow: 24;
  padding: 14px;
  border-radius: 12px;
`;
export const ModalOverlay=styled.div`
margin:"o auto"
`
