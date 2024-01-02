 "use client" 
import React, { useState } from 'react';
import UpModal from '@/ui-component/upModal/UpModal';

const ModalMenu = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpenModal}>Add+</button>
      <UpModal
        open={isModalOpen}
        onClose={handleCloseModal}
        buttonLabel="Close Modal"
      />
    </div>
  );
};

export default ModalMenu;
