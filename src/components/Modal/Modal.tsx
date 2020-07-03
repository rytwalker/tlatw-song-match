import { useState } from "react";
import styled from "styled-components";
import { animated } from "react-spring";

function Modal({ children }) {
  const [show, setShow] = useState(false);

  const open = () => {
    setShow(true);
  };

  const close = () => {
    setShow(false);
  };
  if (show) {
    return (
      <ModalWrapper>
        <ModalBackdrop onClick={close} />
        <StyledModal>{children}</StyledModal>
      </ModalWrapper>
    );
  }

  return null;
}

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1001;
  background-color: rgba(0, 0, 0, 0.3);
`;

const StyledModal = styled(animated.div)`
  padding: 20px;
  position: relative;
  top: 50%;
  left: 50%;
  width: 60%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.primary};
  border-radius: 4px;
  font-size: ${({ theme }) => theme.typeScale.h3};
  box-shadow: 0 5px 15px 5px rgba(0, 0, 0, 0.2);
  z-index: 1002;
  overflow-y: auto;
`;

export default Modal;
