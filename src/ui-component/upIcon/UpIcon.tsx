import React from 'react';
import CloseIcon from '@mui/icons-material/Close';

interface UpIconProps {
  onClose: () => void;
  position?: 'right'|'left'|'end'|'start';
  variant?:"contained|filled"
}


const UpIcon: React.FC<UpIconProps> = ({ onClose }) => {
  return (
    <CloseIcon onClick={onClose} />
  );
};

export default UpIcon;