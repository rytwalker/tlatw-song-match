import { useState } from 'react';

export default function useToggleModal() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const modalHandleClose = () => setIsOpen(false);
  const modalToggle = () => setIsOpen(open => !open);

  return { modalIsOpen, modalHandleClose, modalToggle };
}
