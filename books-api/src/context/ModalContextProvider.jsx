import { createContext, useState } from "react";

export const ModalContext = createContext(null);

const ModalContextProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  return (
    <ModalContext.Provider
      value={{ isModalOpen, setIsModalOpen, modalData, setModalData }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
