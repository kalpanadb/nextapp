import { ReactNode } from "react";

export interface UpModalProps {
    isOpen?: boolean;
    onClose: () => void;
    buttonLabel?: string;
    modalTitle?: string;
    children?: ReactNode;
    className?:string;
  };